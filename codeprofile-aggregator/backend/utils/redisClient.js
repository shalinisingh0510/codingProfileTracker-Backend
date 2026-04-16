const redis = require('redis');

let client = null;
let isRedisAvailable = false;

// Only initialize Redis if REDIS_URL is provided and not pointing to a default localhost that might not exist
const redisUrl = process.env.REDIS_URL;

if (redisUrl && !redisUrl.includes('127.0.0.1') && !redisUrl.includes('localhost')) {
    client = redis.createClient({
        url: redisUrl,
        socket: {
            reconnectStrategy: (retries) => {
                if (retries > 3) {
                    console.log('Redis: Connection failed. Caching disabled.');
                    isRedisAvailable = false;
                    return false; // Stop retrying
                }
                return 10000; // Retry every 10 seconds
            }
        }
    });

    client.on('error', (err) => {
        // Silent error handling to avoid log spam on PaaS like Render
        isRedisAvailable = false;
    });

    client.on('connect', () => {
        console.log('Redis Connected...');
        isRedisAvailable = true;
    });

    // Attempt to connect
    (async () => {
        try {
            await client.connect();
        } catch (error) {
            isRedisAvailable = false;
        }
    })();
} else {
    console.log('Redis: No external REDIS_URL found. Caching is disabled by default to prevent connection errors on Render.');
}

// Mock client functions if redis is unavailable
const getAsync = async (key) => {
    if (!isRedisAvailable || !client) return null;
    try {
        return await client.get(key);
    } catch (err) {
        return null;
    }
};

const setExAsync = async (key, seconds, value) => {
    if (!isRedisAvailable || !client) return;
    try {
        await client.setEx(key, seconds, value);
    } catch (err) {
        // Ignore
    }
};

module.exports = {
    client,
    isRedisAvailable: () => isRedisAvailable,
    getAsync,
    setExAsync
};
