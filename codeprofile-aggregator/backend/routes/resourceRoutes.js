const express = require('express');
const router = express.Router();
const {
    getResources,
    getResourceById,
    createResource,
    updateResource,
    deleteResource
} = require('../controllers/resourceController');
const { protect, optionalProtect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

router.route('/')
    .get(optionalProtect, getResources)
    .post(protect, admin, createResource);

router.route('/:id')
    .get(optionalProtect, getResourceById)
    .put(protect, admin, updateResource)
    .delete(protect, admin, deleteResource);

module.exports = router;
