const { getCodeforcesData } = require('../services/codeforcesService');

// @desc    Get Codeforces stats for a handle
// @route   GET /api/codeforces/:handle
// @access  Public
const getCodeforcesUser = async (req, res) => {
    try {
        const { handle } = req.params;
        const data = await getCodeforcesData(handle);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getCodeforcesUser };
