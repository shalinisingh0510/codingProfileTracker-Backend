const redis = require('redis');

const client = redis.createClient({
    url: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
    socket: {
        reconnectStrategy: (retries) => {
            if (retries > 5) {
                console.log('Redis: Max retries reached. Caching will be disabled.');
                return false; // Stop retrying
            }
            return 5000; // Retry every 5 seconds
        }
    }
});

client.on('error', (err) => {
    // Only log the error once every few minutes to avoid spam
});

client.on('connect', () => console.log('Redis Connected...'));

// Immediately connect to Redis server
(async () => {
    try {
        await client.connect();
    } catch (error) {
        // Error handled by reconnectStrategy
    }
})();

module.exports = client;
