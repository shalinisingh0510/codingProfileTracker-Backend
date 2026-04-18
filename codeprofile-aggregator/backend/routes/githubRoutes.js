const express = require('express');
const router = express.Router();
const { getGithubUser } = require('../controllers/githubController');
const cache = require('../middleware/cacheMiddleware');

router.get('/:username', cache(1800), getGithubUser);

module.exports = router;
