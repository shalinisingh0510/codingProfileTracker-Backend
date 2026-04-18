const express = require('express');
const router = express.Router();
const { getCodeforcesUser } = require('../controllers/codeforcesController');
const cache = require('../middleware/cacheMiddleware');

router.get('/:handle', cache(1800), getCodeforcesUser);

module.exports = router;
