const { getGfgData } = require('../services/gfgService');

// @desc    Get GeeksforGeeks stats for a username
// @route   GET /api/gfg/:username
// @access  Public
const getGfgUser = async (req, res) => {
    try {
        const { username } = req.params;
        const data = await getGfgData(username);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getGfgUser };
