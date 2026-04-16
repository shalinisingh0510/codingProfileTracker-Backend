const { isRedisAvailable, getAsync, setExAsync } = require('../utils/redisClient');

const cache = (durationInSeconds) => {
    return async (req, res, next) => {
        // Skip caching if redis is not available
        if (!isRedisAvailable()) {
            return next();
        }

        // Cache key specific to user if authorized, else original URL
        const key = req.user 
            ? `__express__${req.user._id}__${req.originalUrl || req.url}` 
            : `__express__${req.originalUrl || req.url}`;
        
        try {
            const cachedResponse = await getAsync(key);
            
            if (cachedResponse) {
                return res.json(JSON.parse(cachedResponse));
            } else {
                const originalJson = res.json;
                res.json = function(body) {
                    res.json = originalJson; // Restore original function
                    
                    // Only cache successful responses
                    if (res.statusCode < 400) {
                        setExAsync(key, durationInSeconds, JSON.stringify(body));
                    }
                    
                    return res.json(body);
                };
                next();
            }
        } catch (error) {
            console.warn('Cache Middleware Error:', error.message);
            next();
        }
    };
};

module.exports = cache;
