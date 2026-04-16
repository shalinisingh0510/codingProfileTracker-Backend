const express = require('express');
const router = express.Router();
const { getLeetCodeUser } = require('../controllers/leetcodeController');

router.get('/:username', getLeetCodeUser);

module.exports = router;
