const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
    try {
        const { name, email, password, leetcodeUsername, codeforcesHandle, gfgUsername, githubUsername } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            leetcodeUsername,
            codeforcesHandle,
            gfgUsername,
            githubUsername
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Hardcoded admin check as requested
        if (email === 'admin2722' && password === 'admin@2722') {
            // Find existing or return mock admin
            let user = await User.findOne({ email: 'admin2722' });
            if (!user) {
                // Optionally create the user if not exists
                user = await User.create({
                    name: 'Super Admin',
                    email: 'admin2722',
                    password: 'admin@2722',
                    isAdmin: true
                });
            }
            return res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: true,
                token: generateToken(user._id)
            });
        }

        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser };
