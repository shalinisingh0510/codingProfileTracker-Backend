const User = require('../models/User');
const AiReport = require('../models/AiReport');
const Resource = require('../models/Resource');
const { getCodeforcesData } = require('../services/codeforcesService');
const { getLeetCodeData } = require('../services/leetcodeService');
const { getGfgData } = require('../services/gfgService');
const { getGithubData } = require('../services/githubService');
const { getCodechefData } = require('../services/codechefService');
const { getHackerrankData } = require('../services/hackerrankService');
const { getHackerearthData } = require('../services/hackerearthService');
const Groq = require('groq-sdk');

const VALID_RECOMMENDATION_CATEGORIES = ['DSA', 'System Design', 'Backend', 'Frontend', 'Full stack', 'Cloud', 'Ci/cd', 'Misc'];
const CURRENT_RECOMMENDATION_VERSION = 2;

const TOPIC_RULES = [
    { tag: 'arrays', patterns: [/array/, /two pointer/, /sliding window/] },
    { tag: 'strings', patterns: [/string/, /substring/, /palindrome/] },
    { tag: 'linked-list', patterns: [/linked list/] },
    { tag: 'stack', patterns: [/stack/, /monotonic stack/] },
    { tag: 'queue', patterns: [/queue/, /deque/] },
    { tag: 'heap', patterns: [/heap/, /priority queue/] },
    { tag: 'hashing', patterns: [/hash/, /map/, /set/] },
    { tag: 'binary-search', patterns: [/binary search/, /lower bound/, /upper bound/] },
    { tag: 'recursion', patterns: [/recursion/, /backtracking/] },
    { tag: 'dp', patterns: [/\bdp\b/, /dynamic programming/, /memoization/] },
    { tag: 'greedy', patterns: [/greedy/] },
    { tag: 'graph', patterns: [/graph/, /dfs/, /bfs/, /topological/] },
    { tag: 'tree', patterns: [/tree/, /binary tree/, /bst/, /segment tree/, /fenwick/] },
    { tag: 'trie', patterns: [/trie/] },
    { tag: 'bit-manipulation', patterns: [/bit manipulation/, /\bxor\b/, /\band\b/, /\bor\b/] },
    { tag: 'system-design', patterns: [/system design/, /scalable/, /distributed/, /load balancer/, /sharding/, /replication/, /caching/] },
    { tag: 'api-design', patterns: [/api/, /rest/, /graphql/, /microservice/] },
    { tag: 'database', patterns: [/database/, /sql/, /mongodb/, /postgres/, /redis/, /indexing/] },
    { tag: 'backend', patterns: [/backend/, /server/, /node/, /express/, /auth/, /queue worker/] },
    { tag: 'frontend', patterns: [/frontend/, /react/, /next\.js/, /javascript/, /typescript/, /css/, /ui/] },
    { tag: 'full-stack', patterns: [/full stack/, /fullstack/, /end-to-end/] },
    { tag: 'cloud', patterns: [/cloud/, /aws/, /gcp/, /azure/, /docker/, /kubernetes/, /terraform/] },
    { tag: 'ci-cd', patterns: [/ci\/cd/, /pipeline/, /github actions/, /deployment/, /devops/] },
    { tag: 'machine-learning', patterns: [/\bml\b/, /\bai\b/, /machine learning/, /llm/] },
    { tag: 'oop', patterns: [/\boop\b/, /solid/, /object oriented/, /design pattern/] },
];

const CATEGORY_HINTS = {
    'DSA': ['arrays', 'strings', 'linked-list', 'stack', 'queue', 'heap', 'hashing', 'binary-search', 'recursion', 'dp', 'greedy', 'graph', 'tree', 'trie', 'bit-manipulation'],
    'System Design': ['system-design', 'api-design', 'database', 'oop'],
    'Backend': ['backend', 'api-design', 'database', 'auth'],
    'Frontend': ['frontend', 'react', 'nextjs', 'ui'],
    'Full stack': ['full-stack', 'frontend', 'backend', 'database'],
    'Cloud': ['cloud', 'docker', 'kubernetes', 'terraform'],
    'Ci/cd': ['ci-cd', 'deployment', 'github-actions', 'devops'],
    'Misc': ['machine-learning', 'oop']
};

const normalizeToken = (value) =>
    String(value || '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

const uniqueStrings = (values) => [...new Set(values.filter(Boolean))];

const stripHtml = (value) => String(value || '').replace(/<[^>]+>/g, ' ');

const compactText = (value, limit = 320) => {
    const normalized = stripHtml(value).replace(/\s+/g, ' ').trim();
    return normalized.length > limit ? `${normalized.slice(0, limit)}...` : normalized;
};

const safeJsonParse = (content, fallback) => {
    try {
        return JSON.parse(content);
    } catch (error) {
        return fallback;
    }
};

const extractJsonBlock = (content, fallback) => {
    if (!content) return fallback;

    const arrayMatch = content.match(/\[[\s\S]*\]/);
    if (arrayMatch) {
        return safeJsonParse(arrayMatch[0], fallback);
    }

    const objectMatch = content.match(/\{[\s\S]*\}/);
    if (objectMatch) {
        return safeJsonParse(objectMatch[0], fallback);
    }

    return fallback;
};

const inferResourceTags = (resource) => {
    const seedTags = (resource.tags || []).map(normalizeToken);
    const text = [
        resource.title,
        resource.category,
        resource.description,
        compactText(resource.content, 500),
        resource.link,
    ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

    const inferred = [];

    for (const rule of TOPIC_RULES) {
        if (rule.patterns.some((pattern) => pattern.test(text))) {
            inferred.push(rule.tag);
        }
    }

    const categoryTags = CATEGORY_HINTS[resource.category] || [];

    return uniqueStrings([...seedTags, ...categoryTags, ...inferred]).slice(0, 14);
};

const buildResourceCatalog = (resources) =>
    resources.map((resource) => {
        const resourceKey = resource.slug || resource._id.toString();
        const normalizedTags = inferResourceTags(resource);

        return {
            resource,
            resourceId: resource._id.toString(),
            resourceKey,
            title: resource.title,
            category: resource.category,
            description: compactText(resource.description, 220),
            summary: compactText(resource.content, 260),
            tags: normalizedTags,
            searchText: [
                resource.title,
                resource.category,
                resource.description,
                compactText(resource.content, 600),
                normalizedTags.join(' '),
            ]
                .filter(Boolean)
                .join(' ')
                .toLowerCase(),
        };
    });

const buildFallbackFocusAreas = (reportContent) => {
    const report = String(reportContent || '').toLowerCase();
    const scores = VALID_RECOMMENDATION_CATEGORIES.map((category) => {
        const normalizedCategory = category.toLowerCase();
        let hits = report.includes(normalizedCategory) ? 2 : 0;
        const hints = CATEGORY_HINTS[category] || [];

        hints.forEach((hint) => {
            const phrase = hint.replace(/-/g, ' ');
            if (report.includes(phrase)) {
                hits += 1;
            }
        });

        return { category, hits };
    })
        .sort((left, right) => right.hits - left.hits)
        .slice(0, 2)
        .filter((entry) => entry.hits > 0)
        .map((entry) => ({
            name: entry.category,
            why: 'Fallback focus area inferred from the analysis report.',
            keywords: CATEGORY_HINTS[entry.category] || [],
        }));

    if (scores.length > 0) {
        return scores;
    }

    return [
        { name: 'DSA', why: 'Default fallback for interview preparation.', keywords: CATEGORY_HINTS.DSA },
        { name: 'System Design', why: 'Default fallback for engineering growth.', keywords: CATEGORY_HINTS['System Design'] },
    ];
};

const extractFocusAreas = async (groq, reportContent) => {
    const prompt = `You are selecting learning focus areas for a software engineer.
Return JSON only in this shape:
{
  "focusAreas": [
    {
      "name": "DSA",
      "why": "one sentence",
      "keywords": ["dp", "graphs", "binary-search"]
    }
  ]
}

Rules:
- Choose at most 3 focus areas.
- "name" must be one of: ${JSON.stringify(VALID_RECOMMENDATION_CATEGORIES)}.
- "keywords" should be short, normalized topic tags.
- Do not include markdown or explanation outside JSON.

Report:
${String(reportContent || '').slice(0, 5000)}`;

    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'llama-3.1-8b-instant',
        });

        const parsed = extractJsonBlock(chatCompletion.choices[0]?.message?.content, { focusAreas: [] });
        const focusAreas = Array.isArray(parsed?.focusAreas) ? parsed.focusAreas : [];

        const sanitized = focusAreas
            .filter((area) => VALID_RECOMMENDATION_CATEGORIES.includes(area?.name))
            .map((area) => ({
                name: area.name,
                why: String(area.why || '').trim(),
                keywords: uniqueStrings((Array.isArray(area.keywords) ? area.keywords : []).map(normalizeToken)).slice(0, 8),
            }))
            .filter((area) => area.name);

        return sanitized.length > 0 ? sanitized : buildFallbackFocusAreas(reportContent);
    } catch (error) {
        return buildFallbackFocusAreas(reportContent);
    }
};

const scoreCatalogEntry = (entry, focusAreas) => {
    let score = 0;
    const matchedTags = new Set();
    const matchedFocusAreas = new Set();

    focusAreas.forEach((area, areaIndex) => {
        if (entry.category === area.name) {
            score += 12 - areaIndex;
            matchedFocusAreas.add(area.name);
        }

        (area.keywords || []).forEach((keyword) => {
            const normalizedKeyword = normalizeToken(keyword);
            const phrase = normalizedKeyword.replace(/-/g, ' ');
            const hasDirectTag = entry.tags.includes(normalizedKeyword);
            const hasTextMatch = phrase && entry.searchText.includes(phrase);

            if (hasDirectTag || hasTextMatch) {
                score += hasDirectTag ? 5 : 3;
                matchedTags.add(normalizedKeyword);
                matchedFocusAreas.add(area.name);
            }
        });

        const hintedTags = CATEGORY_HINTS[area.name] || [];
        hintedTags.forEach((tag) => {
            if (entry.tags.includes(tag)) {
                score += 2;
                matchedTags.add(tag);
                matchedFocusAreas.add(area.name);
            }
        });
    });

    return {
        score,
        matchedTags: [...matchedTags].slice(0, 6),
        matchedFocusAreas: [...matchedFocusAreas],
    };
};

const chooseRecommendationsWithGroq = async (groq, focusAreas, candidates) => {
    const prompt = `You are choosing the best learning resources for a developer.
Return ONLY a JSON array. Each item must follow this shape:
{
  "resourceKey": "exact-resource-key-from-catalog",
  "focusArea": "one valid focus area from the input",
  "matchedTags": ["short-tag"],
  "reason": "one concise sentence"
}

Rules:
- Pick between 3 and 6 resources.
- Use only resourceKey values that exist in the catalog.
- Prefer a balanced learning path across the strongest improvement needs.
- Do not invent resources.

Focus areas:
${JSON.stringify(focusAreas, null, 2)}

Catalog:
${JSON.stringify(candidates.map((entry) => ({
            resourceKey: entry.resourceKey,
            title: entry.title,
            category: entry.category,
            tags: entry.tags,
            description: entry.description,
            summary: entry.summary,
        })), null, 2)}`;

    const chatCompletion = await groq.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'llama-3.1-8b-instant',
    });

    return extractJsonBlock(chatCompletion.choices[0]?.message?.content, []);
};

const decorateRecommendations = (resources, details) => {
    const detailsById = new Map(
        (details || []).map((detail) => [String(detail.resourceId), detail])
    );

    return resources.map((resource) => {
        const detail = detailsById.get(resource._id.toString());
        return {
            ...resource.toObject(),
            resourceKey: detail?.resourceKey || resource.slug || resource._id.toString(),
            recommendedFor: detail?.focusArea || resource.category,
            matchedTags: detail?.matchedTags || [],
            recommendationReason: detail?.reason || '',
            recommendationScore: detail?.score || 0,
        };
    });
};

// @desc    Analyze user profile with AI
// @route   GET /api/ai/analyze
// @access  Private
const analyzeProfile = async (req, res) => {
    try {
        if (!process.env.GROQ_API_KEY) {
            return res.status(500).json({ message: "GROQ_API_KEY is not configured on the server." });
        }
        
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { 
            leetcodeUsername, 
            codeforcesHandle, 
            gfgUsername, 
            githubUsername,
            codechefUsername,
            hackerrankUsername,
            hackerearthUsername
        } = user;

        const promises = [
            leetcodeUsername ? getLeetCodeData(leetcodeUsername).catch(() => ({ error: true })) : Promise.resolve(null),
            codeforcesHandle ? getCodeforcesData(codeforcesHandle).catch(() => ({ error: true })) : Promise.resolve(null),
            gfgUsername ? getGfgData(gfgUsername).catch(() => ({ error: true })) : Promise.resolve(null),
            githubUsername ? getGithubData(githubUsername).catch(() => ({ error: true })) : Promise.resolve(null),
            codechefUsername ? getCodechefData(codechefUsername).catch(() => ({ error: true })) : Promise.resolve(null),
            hackerrankUsername ? getHackerrankData(hackerrankUsername).catch(() => ({ error: true })) : Promise.resolve(null),
            hackerearthUsername ? getHackerearthData(hackerearthUsername).catch(() => ({ error: true })) : Promise.resolve(null)
        ];

        let [
            leetcodeData, 
            codeforcesData, 
            gfgData, 
            githubData,
            codechefData,
            hackerrankData,
            hackerearthData
        ] = await Promise.all(promises);

        const sanitizeData = (data) => {
            if (!data) return data;
            const clean = { ...data };
            delete clean.ratingGraph;
            delete clean.solvedGraph;
            delete clean.contributionGraph;
            delete clean.badges; 
            return clean;
        };

        leetcodeData = sanitizeData(leetcodeData);
        codeforcesData = sanitizeData(codeforcesData);
        gfgData = sanitizeData(gfgData);
        githubData = sanitizeData(githubData);
        codechefData = sanitizeData(codechefData);
        hackerrankData = sanitizeData(hackerrankData);
        hackerearthData = sanitizeData(hackerearthData);

        const prompt = `You are a Principal Software Architect and elite Technical Recruiter evaluating a candidate's profile. You must generate a **highly comprehensive, detailed, and visually structured Markdown report** based on their Data Structures and Algorithms (DSA) profile and their GitHub open-source development activity.

Here are your exact requirements:

### 1. DSA Analysis & Rating
- Evaluate the **quality of questions solved** across LeetCode, Codeforces, CodeChef, and GFG.
- Analyze the ratio of easy, medium, and hard questions (if available).
- Discuss contest ratings and rankings. Do they participate actively?
- **Give a clear DSA Rating out of 10.** Provide a short justification for this specific score based on their stats.

### 2. Development Analysis (GitHub)
- **Complex Projects & Thinking Ability:** Look deeply at the \`topRepos\` data. Based on repo names, descriptions, languages, and topics, perform a detailed analysis of their complex projects. What do these projects imply about their thinking ability and system architecture skills?
- **System Design & OOPs / SOLID Principles:** Speculate confidently on what complex system design patterns, OOP concepts, or SOLID principles they likely utilized in their top projects. If they built full-stack apps or scalable systems, explain the implied architecture.
- **Tech & Skills Analysis:** Explicitly list and analyze the technologies they used (e.g., React, Next.js, Node.js, Python, Cloud, ML, AI, databases). How deep does their knowledge appear to be based on project complexity?
- **Competitive Edge & Role Suitability:** Assess how competitive this student is. Are they more suitable for a **Frontend**, **Backend**, **Full Stack**, **ML/AI**, or **DevOps** role? Provide concrete reasons based on their tech stack.
- **Highlight Complex Work:** Call out specific algorithms, system design components, or complex work they likely implemented in any of their repos. Don't be generic; use the repository descriptions and topics to anchor your praise.
- **Give a clear Dev Rating out of 10.**

### 3. Final Verdict
- Give an overall assessment of their potential as an engineer.
- Provide actionable, constructive feedback on what they should build or learn next to reach a 10/10 level.

Keep the tone expert, objective, encouraging, and highly technical. Use Markdown extensively (headings, bullet points, bold text).

Here is the candidate's data:
**User Info:** ${user.name}
**Self-Reported Skills:** ${(user.skills || []).join(', ')}

**DSA Data:**
LeetCode: ${JSON.stringify(leetcodeData)}
Codeforces: ${JSON.stringify(codeforcesData)}
GFG: ${JSON.stringify(gfgData)}
CodeChef: ${JSON.stringify(codechefData)}
HackerRank: ${JSON.stringify(hackerrankData)}
HackerEarth: ${JSON.stringify(hackerearthData)}

**GitHub Development Data:**
${JSON.stringify(githubData)}
`;

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            model: "llama-3.1-8b-instant", 
        });

        const reportContent = chatCompletion.choices[0]?.message?.content || "No report generated.";

        // Save new AI Report
        const newReport = await AiReport.create({
            user: user._id,
            report: reportContent
        });

        // Legacy compatibility
        user.lastAiReport = reportContent;
        user.lastAiReportCreatedAt = new Date();
        await user.save();

        res.json({
            success: true,
            id: newReport._id,
            report: reportContent
        });

    } catch (error) {
        console.error("AI Controller Error:", error);
        res.status(500).json({ message: error.message || 'Failed to generate AI report' });
    }
};

// @desc    Get last AI report for user
// @route   GET /api/ai/last-report
// @access  Private
const getLastReport = async (req, res) => {
    try {
        const report = await AiReport.findOne({ user: req.user._id }).sort({ createdAt: -1 });
        if (report) {
            return res.json({
                success: true,
                id: report._id,
                report: report.report,
                createdAt: report.createdAt
            });
        }
        
        // Fallback to legacy
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({
            success: true,
            report: user.lastAiReport,
            createdAt: user.lastAiReportCreatedAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get AI report by ID
// @route   GET /api/ai/report/:id
// @access  Private
const getReportById = async (req, res) => {
    try {
        const report = await AiReport.findById(req.params.id);
        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }
        if (report.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to view this report' });
        }
        res.json({
            success: true,
            id: report._id,
            report: report.report,
            createdAt: report.createdAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get recommendations for an AI report
// @route   GET /api/ai/recommendations/:id
// @access  Private
const getRecommendations = async (req, res) => {
    try {
        const report = await AiReport.findById(req.params.id).populate('recommendations');
        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }
        if (report.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        // If we already generated recommendations with the current strategy, return them
        if (
            report.recommendationVersion === CURRENT_RECOMMENDATION_VERSION &&
            report.recommendations &&
            report.recommendations.length > 0
        ) {
            const existingResources = report.recommendations.filter(Boolean);
            return res.json({
                success: true,
                resources: decorateRecommendations(existingResources, report.recommendationDetails),
                focusAreas: uniqueStrings((report.recommendationDetails || []).map((detail) => detail.focusArea)).filter(Boolean),
            });
        }

        if (!process.env.GROQ_API_KEY) {
            return res.status(500).json({ message: "GROQ_API_KEY is not configured." });
        }
        
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

        const allResources = await Resource.find({})
            .sort({ createdAt: -1 })
            .select('title slug category description content tags link author createdAt');

        const catalog = buildResourceCatalog(allResources);
        const focusAreas = await extractFocusAreas(groq, report.report);

        const scoredCandidates = catalog
            .map((entry) => {
                const scoring = scoreCatalogEntry(entry, focusAreas);
                return { ...entry, ...scoring };
            })
            .filter((entry) => entry.score > 0)
            .sort((left, right) => right.score - left.score)
            .slice(0, 18);

        const fallbackCandidates = scoredCandidates.length > 0
            ? scoredCandidates
            : catalog
                .map((entry) => ({
                    ...entry,
                    ...scoreCatalogEntry(entry, buildFallbackFocusAreas(report.report)),
                }))
                .sort((left, right) => right.score - left.score)
                .slice(0, 8);

        let recommendationPayload = [];

        try {
            recommendationPayload = await chooseRecommendationsWithGroq(
                groq,
                focusAreas,
                fallbackCandidates
            );
        } catch (error) {
            recommendationPayload = [];
        }

        const candidateMap = new Map(fallbackCandidates.map((entry) => [entry.resourceKey, entry]));

        let recommendationDetails = uniqueStrings(
            (Array.isArray(recommendationPayload) ? recommendationPayload : [])
                .map((item) => String(item?.resourceKey || '').trim())
        )
            .map((resourceKey) => {
                const item = recommendationPayload.find((entry) => entry?.resourceKey === resourceKey);
                const candidate = candidateMap.get(resourceKey);

                if (!candidate) return null;

                const fallbackFocusArea = candidate.matchedFocusAreas[0] || candidate.category;

                return {
                    resourceId: candidate.resource._id,
                    resourceKey: candidate.resourceKey,
                    focusArea: VALID_RECOMMENDATION_CATEGORIES.includes(item?.focusArea) ? item.focusArea : fallbackFocusArea,
                    matchedTags: uniqueStrings(
                        (Array.isArray(item?.matchedTags) ? item.matchedTags : candidate.matchedTags).map(normalizeToken)
                    ).slice(0, 6),
                    reason: String(item?.reason || `Recommended to strengthen ${fallbackFocusArea.toLowerCase()} using a focused blog from your resource hub.`).trim(),
                    score: candidate.score,
                };
            })
            .filter(Boolean)
            .slice(0, 6);

        if (recommendationDetails.length === 0) {
            recommendationDetails = fallbackCandidates.slice(0, 5).map((candidate) => ({
                resourceId: candidate.resource._id,
                resourceKey: candidate.resourceKey,
                focusArea: candidate.matchedFocusAreas[0] || candidate.category,
                matchedTags: candidate.matchedTags,
                reason: `Recommended because it directly covers ${candidate.matchedTags.slice(0, 2).join(' and ') || candidate.category.toLowerCase()}.`,
                score: candidate.score,
            }));
        }

        const recommendedResources = recommendationDetails
            .map((detail) => fallbackCandidates.find((candidate) => candidate.resource._id.toString() === detail.resourceId.toString())?.resource)
            .filter(Boolean);

        report.recommendations = recommendationDetails.map((detail) => detail.resourceId);
        report.recommendationDetails = recommendationDetails;
        report.recommendationVersion = CURRENT_RECOMMENDATION_VERSION;
        await report.save();

        res.json({
            success: true,
            resources: decorateRecommendations(recommendedResources, recommendationDetails),
            focusAreas: focusAreas.map((area) => area.name),
        });

    } catch (error) {
        console.error("Recommendations Error:", error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { 
    analyzeProfile,
    getLastReport,
    getReportById,
    getRecommendations
};
