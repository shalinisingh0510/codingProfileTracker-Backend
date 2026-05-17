const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

const PLANS = {
    plus: {
        name: 'Plus Service',
        '1month': { price: 199, months: 1 },
        '3month': { price: 299, months: 3 },
        '6month': { price: 499, months: 6 },
        '12month': { price: 699, months: 12 }
    },
    premium: {
        name: 'Premium Service',
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
            user.subscriptionUtr = null;
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

// @desc    Process Direct UPI Payment UTR Submission & Notify
// @route   POST /api/subscription/submit-utr
// @access  Private
const submitUpiUtr = async (req, res) => {
    try {
        const { tier, plan, utr } = req.body;

        // Basic validations
        if (!['plus', 'premium'].includes(tier)) {
            return res.status(400).json({ message: 'Invalid subscription tier selected.' });
        }

        if (!PLANS[tier] || !PLANS[tier][plan]) {
            return res.status(400).json({ message: 'Invalid plan duration selected.' });
        }

        if (!utr || !/^\d{12}$/.test(utr)) {
            return res.status(400).json({ message: 'UTR must be a valid 12-digit numeric reference.' });
        }

        // Security Check: Enforce UTR uniqueness across database to prevent multiple claims
        const isDuplicateUtr = await User.findOne({ subscriptionUtr: utr });
        if (isDuplicateUtr) {
            return res.status(400).json({ 
                message: 'This Transaction UTR Reference has already been claimed/verified. Please verify your receipt.' 
            });
        }

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const selectedPlan = PLANS[tier][plan];
        const expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + selectedPlan.months);

        // Update user state with premium tier access
        user.subscriptionTier = tier;
        user.subscriptionPlan = plan;
        user.subscriptionStatus = 'active';
        user.subscriptionExpiresAt = expiresAt;
        user.subscriptionUtr = utr;

        await user.save();

        // --- EMAIL NOTIFICATION SYSTEM ---
        const planDisplayName = PLANS[tier].name;
        const paidAmount = selectedPlan.price;
        const formattedDate = expiresAt.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        // 1. Email to the Subscribed User
        const userEmailHtml = `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #020617; color: #ffffff; padding: 40px 20px; text-align: center;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #0b0f19; border: 1px solid #1e293b; border-radius: 24px; padding: 40px; text-align: left; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <span style="font-size: 50px;">🎉</span>
                        <h2 style="color: #22d3ee; margin-top: 10px; font-weight: 900; font-size: 28px; letter-spacing: -0.5px;">Welcome to CodeProfile ${tier.toUpperCase()}!</h2>
                        <p style="color: #94a3b8; font-size: 14px;">Your subscription has been successfully verified and activated.</p>
                    </div>

                    <hr style="border: 0; border-top: 1px solid #1e293b; margin: 30px 0;" />

                    <h3 style="color: #ffffff; font-size: 16px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">Subscription Details</h3>
                    <div style="background-color: #020617; border: 1px solid #1e293b; padding: 20px; border-radius: 16px; margin-bottom: 30px;">
                        <table style="width: 100%; font-size: 14px; color: #cbd5e1; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 6px 0; color: #94a3b8;">Tier:</td>
                                <td style="padding: 6px 0; text-align: right; font-weight: bold; color: #ffffff;">${planDisplayName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px 0; color: #94a3b8;">Duration:</td>
                                <td style="padding: 6px 0; text-align: right; font-weight: bold; color: #ffffff;">${plan}</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px 0; color: #94a3b8;">Amount Paid:</td>
                                <td style="padding: 6px 0; text-align: right; font-weight: bold; color: #22d3ee;">₹${paidAmount}</td>
                            </tr>
                            <tr>
                                <td style="padding: 6px 0; color: #94a3b8;">Transaction UTR:</td>
                                <td style="padding: 6px 0; text-align: right; font-family: monospace; font-size: 13px; color: #ffffff;">${utr}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0 0 0; color: #94a3b8; border-t: 1px dashed #1e293b;">Valid Until:</td>
                                <td style="padding: 10px 0 0 0; text-align: right; font-weight: bold; color: #10b981; border-t: 1px dashed #1e293b;">${formattedDate}</td>
                            </tr>
                        </table>
                    </div>

                    <p style="color: #cbd5e1; font-size: 14px; leading-relaxed;">
                        Your dashboard now highlights your active premium subscriber tier with dynamic glowing badges! You also have full tracking enabled for **GeeksforGeeks** (including institute ranks and streaks), dynamic **Codeforces** status checks, and expanded **AI Profile Coach Analysis**.
                    </p>

                    <div style="text-align: center; margin-top: 40px;">
                        <a href="http://localhost:5173/dashboard" style="background-color: #22d3ee; color: #020617; padding: 14px 28px; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; display: inline-block;">Go to Dashboard 🚀</a>
                    </div>
                </div>
            </div>
        `;

        // 2. Email to the Admins
        const adminEmailHtml = `
            <div style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #1e293b;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <h2 style="color: #0f172a; margin-bottom: 20px;">🔔 New Subscriber Alert</h2>
                    <p style="font-size: 14px; color: #475569; margin-bottom: 30px;">
                        A user has successfully completed direct UPI payment and claimed a new premium plan. Details below:
                    </p>

                    <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 30px;">
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: bold; color: #64748b; width: 120px;">Username:</td>
                            <td style="padding: 10px 0; color: #0f172a;"><strong>${user.username}</strong></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Full Name:</td>
                            <td style="padding: 10px 0; color: #0f172a;">${user.name}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Email Address:</td>
                            <td style="padding: 10px 0; color: #0f172a;">${user.email}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Tier / Plan:</td>
                            <td style="padding: 10px 0; color: #0f172a;"><span style="background-color: #ecfdf5; color: #065f46; padding: 4px 8px; border-radius: 6px; font-weight: bold; text-transform: uppercase; font-size: 11px;">${tier} - ${plan}</span></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Amount Paid:</td>
                            <td style="padding: 10px 0; color: #10b981; font-weight: bold;">₹${paidAmount}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; font-weight: bold; color: #64748b;">UTR Code:</td>
                            <td style="padding: 10px 0; font-family: monospace; font-size: 13px; color: #ef4444; font-weight: bold;">${utr}</td>
                        </tr>
                    </table>

                    <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; font-size: 12px; color: #475569; text-align: center;">
                        This subscription has been automatically approved and activated. Double-check your banking alerts or UPI statement against UTR code: <strong>${utr}</strong>.
                    </div>
                </div>
            </div>
        `;

        // Send to Subscribed User
        await sendEmail({
            to: user.email,
            subject: `🎉 Your CodeProfile ${tier.toUpperCase()} Subscription is Active!`,
            html: userEmailHtml
        });

        // Send to Admin (Send to configured sender and CC Developer)
        const adminDestEmail = process.env.EMAIL_USER || 'admin2722@gmail.com';
        await sendEmail({
            to: adminDestEmail,
            subject: `🔔 New Subscription Alert: ${user.username} (${tier.toUpperCase()})`,
            html: adminEmailHtml
        });

        // Send a carbon-copy to user's registered gmail
        await sendEmail({
            to: 'shalinishareyasinghl@gmail.com',
            subject: `🔔 [Admin CC] New Subscription Alert: ${user.username}`,
            html: adminEmailHtml
        });

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
            return res.status(404).json({ message: 'User not found.' });
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
    submitUpiUtr,
    cancelSubscription
};
