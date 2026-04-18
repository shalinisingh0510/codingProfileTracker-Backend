const crypto = require('crypto');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const sendEmail = require('../utils/sendEmail');

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

// @desc    Forgot password - send reset code
// @route   POST /api/auth/forgot-password
// @access  Public
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'No account found with that email address' });
        }

        // Generate a 6-digit reset code
        const resetCode = crypto.randomInt(100000, 999999).toString();
        
        // Store hashed token and expiry (15 minutes)
        user.passwordResetToken = crypto.createHash('sha256').update(resetCode).digest('hex');
        user.passwordResetExpires = Date.now() + 15 * 60 * 1000;
        await user.save();

        // Send email
        const frontendUrl = process.env.FRONTEND_URL || 'https://coding-profile-tracker-frontend.vercel.app';
        const emailSent = await sendEmail({
            to: user.email,
            subject: 'Password Reset Code - CodeProfile Tracker',
            html: `
                <div style="font-family: 'Segoe UI', sans-serif; max-width: 500px; margin: 0 auto; background: #0f172a; color: #f1f5f9; padding: 40px; border-radius: 20px;">
                    <h1 style="color: #22d3ee; margin-bottom: 8px;">Password Reset</h1>
                    <p style="color: #94a3b8; font-size: 14px;">Hi ${user.name}, you requested a password reset.</p>
                    <div style="background: #1e293b; padding: 24px; border-radius: 12px; text-align: center; margin: 24px 0;">
                        <p style="color: #64748b; font-size: 12px; margin-bottom: 8px;">Your reset code is:</p>
                        <h2 style="color: #22d3ee; font-size: 36px; letter-spacing: 8px; margin: 0;">${resetCode}</h2>
                    </div>
                    <p style="color: #64748b; font-size: 12px;">This code expires in <strong>15 minutes</strong>.</p>
                    <p style="color: #475569; font-size: 11px; margin-top: 24px;">If you didn't request this, ignore this email.</p>
                </div>
            `
        });

        if (emailSent) {
            res.json({ message: 'Reset code sent to your email address' });
        } else {
            res.status(500).json({ message: 'Failed to send reset email. Please try again.' });
        }
    } catch (error) {
        console.error('[Auth] Forgot password error:', error.message);
        res.status(500).json({ message: error.message });
    }
};

// @desc    Reset password with code
// @route   POST /api/auth/reset-password
// @access  Public
const resetPassword = async (req, res) => {
    try {
        const { email, code, newPassword } = req.body;

        if (!email || !code || !newPassword) {
            return res.status(400).json({ message: 'Email, code, and new password are required' });
        }

        if (newPassword.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters' });
        }

        const hashedCode = crypto.createHash('sha256').update(code).digest('hex');

        const user = await User.findOne({
            email,
            passwordResetToken: hashedCode,
            passwordResetExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired reset code' });
        }

        user.password = newPassword;
        user.passwordResetToken = null;
        user.passwordResetExpires = null;
        await user.save();

        res.json({ message: 'Password reset successful! You can now log in.' });
    } catch (error) {
        console.error('[Auth] Reset password error:', error.message);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser, forgotPassword, resetPassword };
