const { getHackerrankData } = require('../services/hackerrankService');

// @desc    Get HackerRank stats for a username
// @route   GET /api/hackerrank/:username
// @access  Public
const getHackerrankUser = async (req, res) => {
    try {
        const { username } = req.params;
        const data = await getHackerrankData(username);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getHackerrankUser };
