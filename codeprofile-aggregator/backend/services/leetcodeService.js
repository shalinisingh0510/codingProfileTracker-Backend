const axios = require('axios');

const getLeetCodeData = async (username) => {
    try {
        // Using a reliable open-source LeetCode stats API
        // This is much more stable for cloud deployments like Render compared to direct GraphQL
        const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`);

        if (response.data.status === 'success') {
            return {
                totalSolved: response.data.totalSolved,
                easySolved: response.data.easySolved,
                mediumSolved: response.data.mediumSolved,
                hardSolved: response.data.hardSolved,
                acceptanceRate: response.data.acceptanceRate,
                ranking: response.data.ranking,
                contributionPoints: response.data.contributionPoints,
                reputation: response.data.reputation,
                // The API doesn't provide the full calendar, but we can provide a dummy or empty one
                // or just remove it if not needed for the main stats.
                submissionCalendar: {} 
            };
        } else {
            throw new Error(response.data.message || 'User not found on LeetCode');
        }
    } catch (error) {
        console.warn(`LeetCode API failed for ${username}:`, error.message);
        
        // Final fallback to a different proxy if herokuapp is down
        try {
            const fallbackRes = await axios.get(`https://leetcode-api-faisalshohag.vercel.app/${username}`);
            if (fallbackRes.data && fallbackRes.data.totalSolved !== undefined) {
                return {
                    totalSolved: fallbackRes.data.totalSolved,
                    easySolved: fallbackRes.data.easySolved,
                    mediumSolved: fallbackRes.data.mediumSolved,
                    hardSolved: fallbackRes.data.hardSolved,
                    ranking: fallbackRes.data.ranking,
                    submissionCalendar: {}
                };
            }
        } catch (err) {
            console.error("All LeetCode fallbacks failed.");
        }

        return {
            totalSolved: 0,
            easySolved: 0,
            mediumSolved: 0,
            hardSolved: 0,
            isMock: true,
            error: "Could not fetch dynamic data"
        };
    }
};

module.exports = { getLeetCodeData };
