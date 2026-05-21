const express = require('express');
const router = express.Router();

const { listTopics, getTopic, upsertTopic } = require('../controllers/examGuideController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

router.get('/:examSlug/sections/:sectionSlug/topics', listTopics);
router.get('/:examSlug/sections/:sectionSlug/topics/:topicSlug', getTopic);
router.put('/:examSlug/sections/:sectionSlug/topics/:topicSlug', protect, admin, upsertTopic);

module.exports = router;

