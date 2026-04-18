const express = require('express');
const router = express.Router();
const { getDashboardData, getUserStatsHeader } = require('../controllers/dashboardController');
const { protect } = require('../middleware/authMiddleware');
const cache = require('../middleware/cacheMiddleware');

// Protected route - requires JWT & cached for 300 seconds (5 min)
router.get('/', protect, cache(300), getDashboardData);
router.get('/user', protect, getUserStatsHeader);

module.exports = router;
