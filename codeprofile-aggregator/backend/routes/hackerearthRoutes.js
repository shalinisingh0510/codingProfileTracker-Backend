const express = require('express');
const router = express.Router();
const { getHackerearthUser } = require('../controllers/hackerearthUser');
const cache = require('../middleware/cacheMiddleware');

router.get('/:username', cache(1800), getHackerearthUser);

module.exports = router;
