const User = require('../models/User');
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
        // Initialize Groq inside the function so if the key is missing at startup it doesn't crash the whole app
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

        // Strip out large arrays (graphs) to save tokens and prevent API errors/timeouts
        const sanitizeData = (data) => {
            if (!data) return data;
            const clean = { ...data };
            delete clean.ratingGraph;
            delete clean.solvedGraph;
            delete clean.contributionGraph;
            delete clean.badges; // Sometimes badges array is very large
            return clean;
        };

        leetcodeData = sanitizeData(leetcodeData);
        codeforcesData = sanitizeData(codeforcesData);
        gfgData = sanitizeData(gfgData);
        githubData = sanitizeData(githubData);
        codechefData = sanitizeData(codechefData);
        hackerrankData = sanitizeData(hackerrankData);
        hackerearthData = sanitizeData(hackerearthData);

        const prompt = `You are an expert tech recruiter and AI profile analyzer. Analyze the following coding profile data for the user. 
Provide a comprehensive report across Data Structures and Algorithms (DSA) questions and GitHub development.
Please focus on the following points:
1. Quality of DSA solved (analyze the ratio of easy, medium, and hard questions across platforms like LeetCode, CodeChef, Codeforces, GFG).
2. Quality of dev work done on GitHub. Analyze total PRs, issues, public repos, followers, and overall contributions. Note any complex dev work or if the work is basic.
3. Highlight important projects developed based on GitHub data (like the number of repositories and overall GitHub metrics).
4. Give an overall rating or constructive feedback for the candidate.

Keep the tone encouraging, professional, and detailed. Format the output in Markdown.

Here is the data:
User Info: ${user.name}, Skills: ${(user.skills || []).join(', ')}
LeetCode: ${JSON.stringify(leetcodeData)}
Codeforces: ${JSON.stringify(codeforcesData)}
GFG: ${JSON.stringify(gfgData)}
GitHub: ${JSON.stringify(githubData)}
CodeChef: ${JSON.stringify(codechefData)}
HackerRank: ${JSON.stringify(hackerrankData)}
HackerEarth: ${JSON.stringify(hackerearthData)}
`;

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            model: "llama3-8b-8192", 
        });

        const report = chatCompletion.choices[0]?.message?.content || "No report generated.";

        res.json({
            success: true,
            report: report
        });

    } catch (error) {
        console.error("AI Controller Error:", error);
        res.status(500).json({ message: error.message || 'Failed to generate AI report' });
    }
};

module.exports = { 
    analyzeProfile
};
