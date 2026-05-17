const express = require('express');
const router = express.Router();
const { 
    getSubscriptionStatus, 
    createRazorpayOrder, 
    verifyRazorpayPayment, 
    cancelSubscription 
} = require('../controllers/subscriptionController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/status', getSubscriptionStatus);
router.post('/razorpay-order', createRazorpayOrder);
router.post('/razorpay-verify', verifyRazorpayPayment);
router.post('/cancel', cancelSubscription);

module.exports = router;
