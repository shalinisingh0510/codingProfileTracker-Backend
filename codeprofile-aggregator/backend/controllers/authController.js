const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
    try {
        const { username, name, email, password, leetcodeUsername, codeforcesHandle, gfgUsername, githubUsername } = req.body;

        if (!username) {
            return res.status(400).json({ message: 'Username is required' });
        }

        // Check if username is taken
        const usernameExists = await User.findOne({ username: username.toLowerCase() });
        if (usernameExists) {
            return res.status(400).json({ message: 'Username is already taken' });
        }

        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        const user = await User.create({
            username,
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
                username: user.username,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        if (error.code === 11000 && error.keyPattern?.username) {
            return res.status(400).json({ message: 'Username is already taken' });
        }
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
            let user = await User.findOne({ email: 'admin2722' });
            if (!user) {
                user = await User.create({
                    username: 'admin2722',
                    name: 'Super Admin',
                    email: 'admin2722',
                    password: 'admin@2722',
                    isAdmin: true
                });
            }
            return res.json({
                _id: user._id,
                username: user.username || 'admin2722',
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
                username: user.username || user.email.split('@')[0],
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
