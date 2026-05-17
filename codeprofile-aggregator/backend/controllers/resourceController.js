const Resource = require('../models/Resource');

// Helper to determine if a resource is free
const checkIfFreeResource = (title) => {
    if (!title) return false;
    const titleLower = title.toLowerCase();
    return titleLower.includes('striver') || 
           titleLower.includes('fraz') || 
           titleLower.includes('babbar');
};

// @desc    Get all resources
// @route   GET /api/resources
// @access  Public
const getResources = async (req, res) => {
    try {
        const { category } = req.query;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 9;
        const skip = (page - 1) * limit;

        let query = {};
        if (category && category !== 'All') {
            query.category = category;
        }
        
        const count = await Resource.countDocuments(query);
        const resources = await Resource.find(query)
            .populate('author', 'name')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        // Check if current user is subscribed (plus or premium)
        const userTier = req.user?.subscriptionTier || 'free';
        const isSubscribed = ['plus', 'premium'].includes(userTier);

        // Map resources: check paywall & sanitize content for locked resources
        const mappedResources = resources.map(resource => {
            const isFree = checkIfFreeResource(resource.title);
            const isLocked = !isFree && !isSubscribed;

            const resObj = resource.toObject();
            resObj.isLocked = isLocked;

            if (isLocked) {
                // Secure scrub content so clients can't bypass via browser inspectors
                resObj.content = '<p>🔒 <strong>Locked Content.</strong> Please upgrade to a Plus or Premium tier subscription to unlock this premium module.</p>';
                resObj.link = null;
            }

            return resObj;
        });

        res.json({
            resources: mappedResources,
            page,
            pages: Math.ceil(count / limit),
            total: count
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get resource by ID
// @route   GET /api/resources/:id
// @access  Public
const getResourceById = async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id).populate('author', 'name');
        if (!resource) {
            return res.status(404).json({ message: 'Resource not found' });
        }

        const isFree = checkIfFreeResource(resource.title);
        const userTier = req.user?.subscriptionTier || 'free';
        const isSubscribed = ['plus', 'premium'].includes(userTier);

        if (!isFree && !isSubscribed) {
            return res.status(403).json({ 
                message: 'This premium module is locked. Please upgrade to a Plus or Premium tier subscription to unlock.',
                isLocked: true
            });
        }

        res.json(resource);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a resource
// @route   POST /api/resources
// @access  Private/Admin
const createResource = async (req, res) => {
    try {
        const { title, category, description, content, tags, link } = req.body;

        const resource = new Resource({
            title,
            category,
            description,
            content,
            tags,
            link,
            author: req.user._id
        });

        const createdResource = await resource.save();
        res.status(201).json(createdResource);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a resource
// @route   PUT /api/resources/:id
// @access  Private/Admin
const updateResource = async (req, res) => {
    try {
        const { title, category, description, content, tags, link } = req.body;

        const resource = await Resource.findById(req.params.id);

        if (resource) {
            resource.title = title || resource.title;
            resource.category = category || resource.category;
            resource.description = description || resource.description;
            resource.content = content || resource.content;
            resource.tags = tags || resource.tags;
            resource.link = link || resource.link;

            const updatedResource = await resource.save();
            res.json(updatedResource);
        } else {
            res.status(404).json({ message: 'Resource not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a resource
// @route   DELETE /api/resources/:id
// @access  Private/Admin
const deleteResource = async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id);

        if (resource) {
            await Resource.deleteOne({ _id: req.params.id });
            res.json({ message: 'Resource removed' });
        } else {
            res.status(404).json({ message: 'Resource not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getResources,
    getResourceById,
    createResource,
    updateResource,
    deleteResource
};
