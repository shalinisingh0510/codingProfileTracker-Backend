const express = require('express');
const router = express.Router();
const { analyzeProfile, getLastReport } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

router.get('/analyze', protect, analyzeProfile);
router.get('/last-report', protect, getLastReport);

module.exports = router;
