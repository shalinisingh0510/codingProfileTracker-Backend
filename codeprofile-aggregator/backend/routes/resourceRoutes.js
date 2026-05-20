const express = require('express');
const router = express.Router();
const {
    getResources,
    getResourceById,
    getResourceBySlug,
    createResource,
    updateResource,
    deleteResource,
    toggleBookmark,
    recordReadingHistory,
    getBookmarkedResources,
    getReadingHistory,
    backfillSlugs
} = require('../controllers/resourceController');
const { protect, optionalProtect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

// Static routes first (before /:id to avoid collision)
router.route('/bookmarked').get(protect, getBookmarkedResources);
router.route('/history').get(protect, getReadingHistory);
router.route('/backfill-slugs').post(protect, admin, backfillSlugs);
router.route('/slug/:slug').get(optionalProtect, getResourceBySlug);

router.route('/')
    .get(optionalProtect, getResources)
    .post(protect, admin, createResource);

router.route('/:id')
    .get(optionalProtect, getResourceById)
    .put(protect, admin, updateResource)
    .delete(protect, admin, deleteResource);

// Toggle bookmark and update history
router.route('/:id/bookmark').post(protect, toggleBookmark);
router.route('/:id/read').post(protect, recordReadingHistory);

module.exports = router;
