const { getCodechefData } = require('../services/codechefService');

// @desc    Get CodeChef stats for a username
// @route   GET /api/codechef/:username
// @access  Public
const getCodechefUser = async (req, res) => {
    try {
        const { username } = req.params;
        const data = await getCodechefData(username);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getCodechefUser };
