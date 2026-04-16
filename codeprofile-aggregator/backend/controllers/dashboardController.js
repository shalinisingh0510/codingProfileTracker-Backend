const User = require('../models/User');
const { getCodeforcesData } = require('../services/codeforcesService');
const { getLeetCodeData } = require('../services/leetcodeService');
const { getGfgData } = require('../services/gfgService');

// @desc    Get Unified Dashboard platform data
// @route   GET /api/dashboard
// @access  Private
const getDashboardData = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { leetcodeUsername, codeforcesHandle, gfgUsername } = user;

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
                : Promise.resolve(null)
        ];

        const [leetcodeData, codeforcesData, gfgData] = await Promise.all(promises);

        // Aggregate Data
        const leetcodeSolved = leetcodeData && !leetcodeData.error ? leetcodeData.totalSolved : 0;
        const gfgSolved = gfgData && !gfgData.error ? gfgData.problemsSolved : 0;
        // Note: Codeforces API user.info doesn't return total problems solved, only ratings. 
        const codeforcesSolved = codeforcesData && !codeforcesData.error ? codeforcesData.totalSolved : 0; 
        
        const totalSolved = leetcodeSolved + gfgSolved + codeforcesSolved;

        // Calculating approximate problems per day (Assuming 1 year period baseline for metrics, or calculate dynamic logic in the future)
        const daysCoding = 365;
        const averageProblemsPerDay = parseFloat((totalSolved / daysCoding).toFixed(2));

        res.json({
            totalSolved,
            averageProblemsPerDay,
            platforms: {
                leetcode: leetcodeData || { message: "No handle provided or not found" },
                codeforces: codeforcesData || { message: "No handle provided or not found" },
                gfg: gfgData || { message: "No handle provided or not found" }
            }
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getDashboardData };
