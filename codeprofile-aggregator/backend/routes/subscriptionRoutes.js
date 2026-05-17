const express = require('express');
const router = express.Router();
const { getSubscriptionStatus, subscribeUser, cancelSubscription } = require('../controllers/subscriptionController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/status', getSubscriptionStatus);
router.post('/checkout', subscribeUser);
router.post('/cancel', cancelSubscription);

module.exports = router;
