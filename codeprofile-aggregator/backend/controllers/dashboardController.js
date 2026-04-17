const User = require('../models/User');
const { getCodeforcesData } = require('../services/codeforcesService');
const { getLeetCodeData } = require('../services/leetcodeService');
const { getGfgData } = require('../services/gfgService');
const { getGithubData } = require('../services/githubService');
const { getCodechefData } = require('../services/codechefService');
const { getHackerrankData } = require('../services/hackerrankService');
const { getHackerearthData } = require('../services/hackerearthService');

// @desc    Get Unified Dashboard platform data
// @route   GET /api/dashboard
// @access  Private
const getDashboardData = async (req, res) => {
    try {
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

        // Use Promise.all to fetch all service requests concurrently
        const promises = [
            leetcodeUsername ? getLeetCodeData(leetcodeUsername).catch(() => ({ error: true })) : Promise.resolve(null),
            codeforcesHandle ? getCodeforcesData(codeforcesHandle).catch(() => ({ error: true })) : Promise.resolve(null),
            gfgUsername ? getGfgData(gfgUsername).catch(() => ({ error: true })) : Promise.resolve(null),
            githubUsername ? getGithubData(githubUsername).catch(() => ({ error: true })) : Promise.resolve(null),
            codechefUsername ? getCodechefData(codechefUsername).catch(() => ({ error: true })) : Promise.resolve(null),
            hackerrankUsername ? getHackerrankData(hackerrankUsername).catch(() => ({ error: true })) : Promise.resolve(null),
            hackerearthUsername ? getHackerearthData(hackerearthUsername).catch(() => ({ error: true })) : Promise.resolve(null)
        ];

        const [
            leetcodeData, 
            codeforcesData, 
            gfgData, 
            githubData,
            codechefData,
            hackerrankData,
            hackerearthData
        ] = await Promise.all(promises);

        // Aggregate Data
        const getCount = (platform) => (platform && !platform.error) ? (platform.totalSolved || platform.problemsSolved || platform.totalContributions || 0) : 0;
        
        const totalSolved = getCount(leetcodeData) + 
                          getCount(codeforcesData) + 
                          getCount(gfgData) + 
                          getCount(githubData) +
                          getCount(codechefData) +
                          getCount(hackerrankData) +
                          getCount(hackerearthData);

        // Calculating approximate problems per day
        const daysCoding = 365;
        const averageProblemsPerDay = parseFloat((totalSolved / daysCoding).toFixed(2));

        res.json({
            user: {
                name: user.name,
                email: user.email,
                profilePic: user.profilePic,
                collegeName: user.collegeName,
                skills: user.skills
            },
            totalSolved,
            averageProblemsPerDay,
            platforms: {
                leetcode: leetcodeData,
                codeforces: codeforcesData,
                gfg: gfgData,
                github: githubData,
                codechef: codechefData,
                hackerrank: hackerrankData,
                hackerearth: hackerearthData
            }
        });

    } catch (error) {
        console.error("Dashboard Controller Error:", error.message);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getDashboardData };
