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

        // If we already generated recommendations, return them
        if (report.recommendations && report.recommendations.length > 0) {
            return res.json({ success: true, resources: report.recommendations });
        }

        if (!process.env.GROQ_API_KEY) {
            return res.status(500).json({ message: "GROQ_API_KEY is not configured." });
        }
        
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
        
        const prompt = `Based on the following AI analysis report of a software engineer, identify the top 1 or 2 areas where they are weakest or need the most improvement. 
Valid areas are STRICTLY limited to the following categories: ["DSA", "System Design", "Backend", "Frontend", "Full stack", "Cloud", "Ci/cd", "Misc"].
Return ONLY a valid JSON array of strings containing the exact category names. Example output: ["DSA", "System Design"]. Do not output any markdown or explanation.

Report:
${report.report.substring(0, 3000)}`;

        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "llama-3.1-8b-instant",
        });

        let categories = [];
        try {
            const content = chatCompletion.choices[0]?.message?.content || "[]";
            const jsonStr = content.substring(content.indexOf('['), content.lastIndexOf(']') + 1);
            categories = JSON.parse(jsonStr);
        } catch (e) {
            categories = ['DSA', 'System Design']; // fallback
        }
        
        if (!Array.isArray(categories) || categories.length === 0) {
            categories = ['DSA'];
        }

        // Find top 5 resources matching these categories
        const recommendedResources = await Resource.find({ category: { $in: categories } })
            .sort({ createdAt: -1 })
            .limit(5);

        // Also save them to the report so we don't call Groq every time
        report.recommendations = recommendedResources.map(r => r._id);
        await report.save();

        res.json({
            success: true,
            resources: recommendedResources,
            categories: categories
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
