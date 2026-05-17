const express = require('express');
const router = express.Router();
const { 
    getSubscriptionStatus, 
    submitUpiUtr, 
    cancelSubscription 
} = require('../controllers/subscriptionController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/status', getSubscriptionStatus);
router.post('/submit-utr', submitUpiUtr);
router.post('/cancel', cancelSubscription);

module.exports = router;
