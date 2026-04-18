const { getHackerearthData } = require('../services/hackerearthService');

// @desc    Get HackerEarth stats for a username
// @route   GET /api/hackerearth/:username
// @access  Public
const getHackerearthUser = async (req, res) => {
    try {
        const { username } = req.params;
        const data = await getHackerearthData(username);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getHackerearthUser };
