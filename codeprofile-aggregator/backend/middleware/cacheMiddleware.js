const redisClient = require('../utils/redisClient');

const cache = (durationInSeconds) => {
    return async (req, res, next) => {
        // Cache key specific to user if authorized, else original URL
        // Prevents user A from seeing user B's cached dashboard profile
        const key = req.user 
            ? `__express__${req.user._id}__${req.originalUrl || req.url}` 
            : `__express__${req.originalUrl || req.url}`;
        
        try {
            if (!redisClient.isReady) {
                return next();
            }
            const cachedResponse = await redisClient.get(key);
            
            if (cachedResponse) {
                // If it exists in cache, skip controller and return it
                return res.json(JSON.parse(cachedResponse));
            } else {
                // Override res.json to silently cache responses immediately before sending them
                const originalSend = res.json;
                res.json = (body) => {
                    originalSend.call(res, body);
                    // Prevent caching of actual API errors
                    if (res.statusCode < 400) {
                        redisClient.setEx(key, durationInSeconds, JSON.stringify(body));
                    }
                };
                next();
            }
        } catch (error) {
            console.error('Redis Cache Error:', error.message);
            // If redis fails, do not crash -> gracefully fallback to hitting DB/Controller
            next();
        }
    };
};

module.exports = cache;
