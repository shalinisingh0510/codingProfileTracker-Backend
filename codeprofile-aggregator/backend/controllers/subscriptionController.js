const crypto = require('crypto');
const axios = require('axios');
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

// @desc    Create Razorpay Order
// @route   POST /api/subscription/razorpay-order
// @access  Private
const createRazorpayOrder = async (req, res) => {
    try {
        const { tier, plan } = req.body;

        if (!['plus', 'premium'].includes(tier)) {
            return res.status(400).json({ message: 'Invalid subscription tier selected' });
        }

        if (!PLANS[tier] || !PLANS[tier][plan]) {
            return res.status(400).json({ message: 'Invalid plan duration selected' });
        }

        const selectedPlan = PLANS[tier][plan];
        const amount = selectedPlan.price * 100; // Razorpay expects paisa (amount * 100)

        const keyId = process.env.RAZORPAY_KEY_ID;
        const keySecret = process.env.RAZORPAY_KEY_SECRET;

        // If mock keys are present or keys are missing, automatically use dev simulation
        if (!keyId || !keySecret || keyId.startsWith('rzp_test_mockKeyId')) {
            console.log('--- Razorpay order: key missing or mock. Falling back to Developer Simulation ---');
            return res.json({
                id: 'order_dev_' + Math.random().toString(36).substring(2, 15),
                amount: amount,
                currency: 'INR',
                key: keyId || 'rzp_test_mockKeyId123',
                isMock: true
            });
        }

        // Real Razorpay Order Creation via API
        const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64');
        const response = await axios.post(
            'https://api.razorpay.com/v1/orders',
            {
                amount: amount,
                currency: 'INR',
                receipt: `receipt_cp_${Date.now()}`
            },
            {
                headers: {
                    'Authorization': `Basic ${auth}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        res.json({
            id: response.data.id,
            amount: response.data.amount,
            currency: response.data.currency,
            key: keyId,
            isMock: false
        });
    } catch (error) {
        console.error('Razorpay Order Error:', error.response?.data || error.message);
        res.status(500).json({ message: error.response?.data?.error?.description || error.message });
    }
};

// @desc    Verify Razorpay Payment Signature
// @route   POST /api/subscription/razorpay-verify
// @access  Private
const verifyRazorpayPayment = async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature, tier, plan } = req.body;

        if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
            return res.status(400).json({ message: 'Missing payment details for verification' });
        }

        const selectedPlan = PLANS[tier]?.[plan];
        if (!selectedPlan) {
            return res.status(400).json({ message: 'Invalid plan selected' });
        }

        const keySecret = process.env.RAZORPAY_KEY_SECRET;

        // If mock key secret or developer order ID, verify immediately
        const isMockOrder = razorpay_order_id.startsWith('order_dev_');
        if (isMockOrder || !keySecret || keySecret === 'mockSecretKey456') {
            console.log('--- Razorpay Verify: Dev simulated verification passed ---');
        } else {
            // Real Signature Verification using standard HMAC SHA256
            const text = `${razorpay_order_id}|${razorpay_payment_id}`;
            const generatedSignature = crypto
                .createHmac('sha256', keySecret)
                .update(text)
                .digest('hex');

            if (generatedSignature !== razorpay_signature) {
                return res.status(400).json({ message: 'Payment verification failed: invalid signature' });
            }
        }

        // Active the subscription
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + selectedPlan.months);

        user.subscriptionTier = tier;
        user.subscriptionPlan = plan;
        user.subscriptionStatus = 'active';
        user.subscriptionExpiresAt = expiresAt;

        await user.save();

        res.json({
            message: `Successfully verified and subscribed to ${tier.toUpperCase()}`,
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
    createRazorpayOrder,
    verifyRazorpayPayment,
    cancelSubscription
};
