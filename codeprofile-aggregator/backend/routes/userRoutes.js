const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile, getPublicProfile, searchUsers, checkUsername } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Public routes (order matters — specific paths before :username param)
router.get('/search', searchUsers);
router.get('/check-username/:username', checkUsername);

// Private routes
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

// Public profile by username (MUST be last — catches all /:param)
router.get('/:username', getPublicProfile);

module.exports = router;
