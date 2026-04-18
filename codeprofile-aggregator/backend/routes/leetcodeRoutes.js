const express = require('express');
const router = express.Router();
const { getLeetCodeUser } = require('../controllers/leetcodeController');
const cache = require('../middleware/cacheMiddleware');

router.get('/:username', cache(1800), getLeetCodeUser);

module.exports = router;
