const User = require('../models/User');

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            
            // Coding Profiles
            user.leetcodeUsername = req.body.leetcodeUsername ?? user.leetcodeUsername;
            user.codeforcesHandle = req.body.codeforcesHandle ?? user.codeforcesHandle;
            user.gfgUsername = req.body.gfgUsername ?? user.gfgUsername;
            user.githubUsername = req.body.githubUsername ?? user.githubUsername;
            user.codechefUsername = req.body.codechefUsername ?? user.codechefUsername;
            user.hackerrankUsername = req.body.hackerrankUsername ?? user.hackerrankUsername;
            user.hackerearthUsername = req.body.hackerearthUsername ?? user.hackerearthUsername;

            // Professional Details
            user.profilePic = req.body.profilePic ?? user.profilePic;
            user.collegeName = req.body.collegeName ?? user.collegeName;
            user.skills = req.body.skills ?? user.skills;

            if (req.body.password) {
                user.password = req.body.password;
            }

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                leetcodeUsername: updatedUser.leetcodeUsername,
                codeforcesHandle: updatedUser.codeforcesHandle,
                gfgUsername: updatedUser.gfgUsername,
                githubUsername: updatedUser.githubUsername,
                codechefUsername: updatedUser.codechefUsername,
                hackerrankUsername: updatedUser.hackerrankUsername,
                hackerearthUsername: updatedUser.hackerearthUsername,
                profilePic: updatedUser.profilePic,
                collegeName: updatedUser.collegeName,
                skills: updatedUser.skills
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUserProfile,
    updateUserProfile
};
