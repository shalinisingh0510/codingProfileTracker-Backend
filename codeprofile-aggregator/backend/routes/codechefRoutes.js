const express = require('express');
const router = express.Router();
const { getCodechefUser } = require('../controllers/codechefController');
const cache = require('../middleware/cacheMiddleware');

router.get('/:username', cache(1800), getCodechefUser);

module.exports = router;
