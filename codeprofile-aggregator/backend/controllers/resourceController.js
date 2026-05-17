const Resource = require('../models/Resource');
const User = require('../models/User');

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

        // Fetch actual User object to verify bookmarks
        let userBookmarks = [];
        if (req.user) {
            const dbUser = await User.findById(req.user._id);
            if (dbUser) {
                userBookmarks = dbUser.bookmarks.map(id => id.toString());
            }
        }

        // Map resources: check paywall & sanitize content for locked resources
        const mappedResources = resources.map(resource => {
            const isFree = checkIfFreeResource(resource.title);
            const isLocked = !isFree && !isSubscribed;
            const isBookmarked = userBookmarks.includes(resource._id.toString());

            const resObj = resource.toObject();
            resObj.isLocked = isLocked;
            resObj.isBookmarked = isBookmarked;

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

        // Check if bookmarked
        let isBookmarked = false;
        if (req.user) {
            const dbUser = await User.findById(req.user._id);
            if (dbUser) {
                isBookmarked = dbUser.bookmarks.map(id => id.toString()).includes(resource._id.toString());
            }
        }

        const resObj = resource.toObject();
        resObj.isBookmarked = isBookmarked;

        res.json(resObj);
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

// @desc    Toggle Bookmark for a resource
// @route   POST /api/resources/:id/bookmark
// @access  Private
const toggleBookmark = async (req, res) => {
    try {
        const resourceId = req.params.id;
        const user = await User.findById(req.user._id);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const stringBookmarks = user.bookmarks.map(id => id.toString());
        const isBookmarked = stringBookmarks.includes(resourceId);

        if (isBookmarked) {
            user.bookmarks = user.bookmarks.filter(id => id.toString() !== resourceId);
            await user.save();
            res.json({ message: 'Resource removed from bookmarks', bookmarked: false });
        } else {
            user.bookmarks.push(resourceId);
            await user.save();
            res.json({ message: 'Resource added to bookmarks', bookmarked: true });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Record Reading History for a resource
// @route   POST /api/resources/:id/read
// @access  Private
const recordReadingHistory = async (req, res) => {
    try {
        const resourceId = req.params.id;
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Filter out existing occurrences to ensure absolute uniqueness (no duplicates)
        user.readingHistory = user.readingHistory.filter(id => id.toString() !== resourceId);
        
        // Push most recent to the front (unshift)
        user.readingHistory.unshift(resourceId);
        
        // Cap history size to 50 items
        if (user.readingHistory.length > 50) {
            user.readingHistory = user.readingHistory.slice(0, 50);
        }

        await user.save();
        res.json({ success: true, message: 'Reading history updated' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all bookmarked resources
// @route   GET /api/resources/bookmarked
// @access  Private
const getBookmarkedResources = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate({
            path: 'bookmarks',
            populate: { path: 'author', select: 'name' }
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check user subscription tier
        const userTier = user.subscriptionTier || 'free';
        const isSubscribed = ['plus', 'premium'].includes(userTier);

        // Sanitize paywalled cards inside bookmarks
        const sanitizedBookmarks = user.bookmarks.filter(resource => resource !== null).map(resource => {
            const titleLower = resource.title.toLowerCase();
            const isFree = titleLower.includes('striver') || 
                           titleLower.includes('fraz') || 
                           titleLower.includes('babbar');
            
            const isLocked = !isFree && !isSubscribed;
            const resObj = resource.toObject();
            resObj.isLocked = isLocked;
            resObj.isBookmarked = true;

            if (isLocked) {
                resObj.content = '<p>🔒 <strong>Locked Content.</strong> Please upgrade to a Plus or Premium tier subscription to unlock this premium module.</p>';
                resObj.link = null;
            }
            return resObj;
        });

        res.json(sanitizedBookmarks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get reading history
// @route   GET /api/resources/history
// @access  Private
const getReadingHistory = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate({
            path: 'readingHistory',
            populate: { path: 'author', select: 'name' }
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check user subscription tier
        const userTier = user.subscriptionTier || 'free';
        const isSubscribed = ['plus', 'premium'].includes(userTier);

        // Fetch actual User object to verify bookmarks
        const dbUser = await User.findById(req.user._id);
        const userBookmarks = dbUser ? dbUser.bookmarks.map(id => id.toString()) : [];

        // Sanitize paywalled cards inside history
        const sanitizedHistory = user.readingHistory.filter(resource => resource !== null).map(resource => {
            const titleLower = resource.title.toLowerCase();
            const isFree = titleLower.includes('striver') || 
                           titleLower.includes('fraz') || 
                           titleLower.includes('babbar');
            
            const isLocked = !isFree && !isSubscribed;
            const isBookmarked = userBookmarks.includes(resource._id.toString());
            
            const resObj = resource.toObject();
            resObj.isLocked = isLocked;
            resObj.isBookmarked = isBookmarked;

            if (isLocked) {
                resObj.content = '<p>🔒 <strong>Locked Content.</strong> Please upgrade to a Plus or Premium tier subscription to unlock this premium module.</p>';
                resObj.link = null;
            }
            return resObj;
        });

        res.json(sanitizedHistory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getResources,
    getResourceById,
    createResource,
    updateResource,
    deleteResource,
    toggleBookmark,
    recordReadingHistory,
    getBookmarkedResources,
    getReadingHistory
};
