const { getLeetCodeData } = require('../services/leetcodeService');

// @desc    Get LeetCode stats for a username
// @route   GET /api/leetcode/:username
// @access  Public
const getLeetCodeUser = async (req, res) => {
    try {
        const { username } = req.params;
        const data = await getLeetCodeData(username);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getLeetCodeUser };
