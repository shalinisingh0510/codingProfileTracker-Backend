const { getGithubData } = require('../services/githubService');

// @desc    Get GitHub stats for a username
// @route   GET /api/github/:username
// @access  Public
const getGithubUser = async (req, res) => {
    try {
        const { username } = req.params;
        const data = await getGithubData(username);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getGithubUser };
