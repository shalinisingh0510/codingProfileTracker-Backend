const axios = require('axios');

const getCodeforcesData = async (handle) => {
    try {
        const response = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
        
        if (response.data.status === 'OK' && response.data.result.length > 0) {
            const user = response.data.result[0];
            return {
                rating: user.rating || 0,
                maxRating: user.maxRating || 0,
                rank: user.rank || 'Unrated',
                contribution: user.contribution || 0
            };
        } else {
            throw new Error('User not found on Codeforces');
        }
    } catch (error) {
        // Codeforces usually returns a detailed error in response.data.comment
        if (error.response && error.response.data && error.response.data.comment) {
            throw new Error(error.response.data.comment);
        }
        throw new Error('Error fetching Codeforces data');
    }
};

module.exports = { getCodeforcesData };
