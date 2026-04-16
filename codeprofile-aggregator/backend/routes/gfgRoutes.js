const express = require('express');
const router = express.Router();
const { getGfgUser } = require('../controllers/gfgController');

router.get('/:username', getGfgUser);

module.exports = router;
