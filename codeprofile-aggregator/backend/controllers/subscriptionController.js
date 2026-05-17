const User = require('../models/User');

const PLANS = {
    plus: {
        '1month': { price: 199, months: 1 },
        '3month': { price: 299, months: 3 },
        '6month': { price: 499, months: 6 },
        '12month': { price: 699, months: 12 }
    },
    premium: {
        '1month': { price: 299, months: 1 },
        '3month': { price: 499, months: 3 },
        '6month': { price: 699, months: 6 },
        '12month': { price: 799, months: 12 }
    }
};

// @desc    Get subscription status
// @route   GET /api/subscription/status
// @access  Private
const getSubscriptionStatus = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if subscription has expired
        if (user.subscriptionExpiresAt && new Date() > new Date(user.subscriptionExpiresAt)) {
            user.subscriptionTier = 'free';
            user.subscriptionPlan = null;
            user.subscriptionStatus = 'expired';
            user.subscriptionExpiresAt = null;
            await user.save();
        }

        res.json({
            tier: user.subscriptionTier,
            plan: user.subscriptionPlan,
            status: user.subscriptionStatus,
            expiresAt: user.subscriptionExpiresAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Initiate/Complete mock subscription checkout
// @route   POST /api/subscription/checkout
// @access  Private
const subscribeUser = async (req, res) => {
    try {
        const { tier, plan } = req.body;

        if (!['plus', 'premium'].includes(tier)) {
            return res.status(400).json({ message: 'Invalid subscription tier selected' });
        }

        if (!PLANS[tier] || !PLANS[tier][plan]) {
            return res.status(400).json({ message: 'Invalid plan duration selected' });
        }

        const selectedPlan = PLANS[tier][plan];
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Calculate expiration date
        const expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + selectedPlan.months);

        user.subscriptionTier = tier;
        user.subscriptionPlan = plan;
        user.subscriptionStatus = 'active';
        user.subscriptionExpiresAt = expiresAt;

        await user.save();

        res.json({
            message: `Successfully subscribed to ${tier.toUpperCase()} (${plan})`,
            subscription: {
                tier: user.subscriptionTier,
                plan: user.subscriptionPlan,
                status: user.subscriptionStatus,
                expiresAt: user.subscriptionExpiresAt
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Cancel subscription
// @route   POST /api/subscription/cancel
// @access  Private
const cancelSubscription = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.subscriptionStatus = 'cancelled';
        await user.save();

        res.json({
            message: 'Subscription cancelled successfully. Benefits remain active until expiration.',
            subscription: {
                tier: user.subscriptionTier,
                plan: user.subscriptionPlan,
                status: user.subscriptionStatus,
                expiresAt: user.subscriptionExpiresAt
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getSubscriptionStatus,
    subscribeUser,
    cancelSubscription
};
