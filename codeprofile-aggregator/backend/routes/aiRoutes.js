const express = require('express');
const router = express.Router();
const { analyzeProfile, getLastReport, getReportById, getRecommendations } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

router.get('/analyze', protect, analyzeProfile);
router.get('/last-report', protect, getLastReport);
router.get('/report/:id', protect, getReportById);
router.get('/recommendations/:id', protect, getRecommendations);

module.exports = router;
