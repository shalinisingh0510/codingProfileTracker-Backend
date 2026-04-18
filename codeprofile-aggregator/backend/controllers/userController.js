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
        console.log('Update Profile: Starting for user ID', req.user?._id);
        
        if (!req.user?._id) {
            console.error('Update Profile Error: req.user._id is missing');
            return res.status(401).json({ message: 'Not authorized' });
        }

        const user = await User.findById(req.user._id);

        if (user) {
            console.log('Update Profile: User found in database');
            
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
            
            // Handle skills conversion if it's a string
            if (req.body.skills !== undefined) {
                console.log('Update Profile: Handling skills conversion');
                if (typeof req.body.skills === 'string') {
                    user.skills = req.body.skills.split(',').map(skill => skill.trim()).filter(skill => skill !== "");
                } else {
                    user.skills = req.body.skills;
                }
            }

            if (req.body.password) {
                console.log('Update Profile: Password update requested');
                user.password = req.body.password;
            }

            console.log('Update Profile: Attempting to save user...');
            const updatedUser = await user.save();
            console.log('Update Profile: User saved successfully');

            res.json({
                _id: updatedUser._id,
                username: updatedUser.username,
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
            console.warn('Update Profile: User not found with ID', req.user._id);
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Update Profile Error Trace:', error.stack || error);
        
        // Handle Mongoose duplicate key error (code 11000)
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Handle specific validation errors
        if (error.name === 'ValidationError') {
            const message = Object.values(error.errors).map(val => val.message).join(', ');
            return res.status(400).json({ message });
        }

        res.status(500).json({ 
            message: error.message || 'Internal Server Error',
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};

// @desc    Get public profile by username
// @route   GET /api/users/:username
// @access  Public
const getPublicProfile = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username.toLowerCase() })
            .select('-password -email');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            username: user.username,
            name: user.name,
            profilePic: user.profilePic,
            collegeName: user.collegeName,
            skills: user.skills,
            handles: {
                leetcode: user.leetcodeUsername,
                codeforces: user.codeforcesHandle,
                gfg: user.gfgUsername,
                github: user.githubUsername,
                codechef: user.codechefUsername,
                hackerrank: user.hackerrankUsername,
                hackerearth: user.hackerearthUsername
            },
            createdAt: user.createdAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Search users by username or name
// @route   GET /api/users/search?q=query
// @access  Public
const searchUsers = async (req, res) => {
    try {
        const query = req.query.q;
        if (!query || query.length < 2) {
            return res.json([]);
        }

        const users = await User.find({
            $or: [
                { username: { $regex: query, $options: 'i' } },
                { name: { $regex: query, $options: 'i' } }
            ]
        })
        .select('username name profilePic collegeName')
        .limit(10);

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Check if username is available
// @route   GET /api/users/check-username/:username
// @access  Public
const checkUsername = async (req, res) => {
    try {
        const exists = await User.findOne({ username: req.params.username.toLowerCase() });
        res.json({ available: !exists });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUserProfile,
    updateUserProfile,
    getPublicProfile,
    searchUsers,
    checkUsername
};
