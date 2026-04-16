const User = require('../models/User');
const { getCodeforcesData } = require('../services/codeforcesService');
const { getLeetCodeData } = require('../services/leetcodeService');
const { getGfgData } = require('../services/gfgService');
const { getGithubData } = require('../services/githubService');

// @desc    Get Unified Dashboard platform data
// @route   GET /api/dashboard
// @access  Private
const getDashboardData = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { leetcodeUsername, codeforcesHandle, gfgUsername, githubUsername } = user;

        // Use Promise.all to fetch all service requests concurrently
        const promises = [
            leetcodeUsername 
                ? getLeetCodeData(leetcodeUsername).catch(e => ({ error: true, message: e.message })) 
                : Promise.resolve(null),
            codeforcesHandle 
                ? getCodeforcesData(codeforcesHandle).catch(e => ({ error: true, message: e.message })) 
                : Promise.resolve(null),
            gfgUsername 
                ? getGfgData(gfgUsername).catch(e => ({ error: true, message: e.message })) 
                : Promise.resolve(null),
            githubUsername
                ? getGithubData(githubUsername).catch(e => ({ error: true, message: e.message }))
                : Promise.resolve(null)
        ];

        const [leetcodeData, codeforcesData, gfgData, githubData] = await Promise.all(promises);

        // Aggregate Data
        const leetcodeSolved = (leetcodeData && !leetcodeData.error) ? (leetcodeData.totalSolved || 0) : 0;
        const gfgSolved = (gfgData && !gfgData.error) ? (gfgData.problemsSolved || 0) : 0;
        const codeforcesSolved = (codeforcesData && !codeforcesData.error) ? (codeforcesData.totalSolved || 0) : 0; 
        
        const totalSolved = leetcodeSolved + gfgSolved + codeforcesSolved;

        // Calculating approximate problems per day
        const daysCoding = 365;
        const averageProblemsPerDay = parseFloat((totalSolved / daysCoding).toFixed(2));

        res.json({
            totalSolved,
            averageProblemsPerDay,
            platforms: {
                leetcode: leetcodeData || { message: "No handle provided" },
                codeforces: codeforcesData || { message: "No handle provided" },
                gfg: gfgData || { message: "No handle provided" },
                github: githubData || { message: "No handle provided" }
            }
        });

    } catch (error) {
        console.error("Dashboard Controller Error:", error.message);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getDashboardData };
