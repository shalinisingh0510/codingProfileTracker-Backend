const axios = require('axios');

const getHackerrankData = async (username) => {
    try {
        return {
            username,
            totalSolved: 0,
            rating: "Coming Soon",
            error: false
        };
    } catch (error) {
        return { error: true, message: error.message };
    }
};

module.exports = { getHackerrankData };
