const express = require('express');
const router = express.Router();
const { getCodeforcesUser } = require('../controllers/codeforcesController');

router.get('/:handle', getCodeforcesUser);

module.exports = router;
