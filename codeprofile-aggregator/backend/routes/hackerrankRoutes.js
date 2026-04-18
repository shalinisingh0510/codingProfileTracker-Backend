const express = require('express');
const router = express.Router();
const { getHackerrankUser } = require('../controllers/hackerrankController');
const cache = require('../middleware/cacheMiddleware');

router.get('/:username', cache(1800), getHackerrankUser);

module.exports = router;
