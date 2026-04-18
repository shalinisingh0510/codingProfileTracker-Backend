const axios = require('axios');

const getHackerrankData = async (username) => {
    try {
        const url = `https://www.hackerrank.com/rest/hackers/${username}/badges`;
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            },
            timeout: 10000
        });

        if (!response.data || !response.data.models) {
            return { error: true, message: "HackerRank profile not found or private" };
        }

        const badges = response.data.models;
        let totalSolved = 0;
        let highestStars = 0;
        let primaryBadge = "Badge Explorer";
        let totalPoints = 0;
        let globalRank = "---";

        badges.forEach(badge => {
            totalSolved += (badge.solved || 0);
            totalPoints += (badge.total_points || 0);
            
            if (badge.stars > highestStars) {
                highestStars = badge.stars;
                primaryBadge = `${badge.badge_name} (${highestStars} Stars)`;
                globalRank = badge.hacker_rank ? `#${badge.hacker_rank.toLocaleString()}` : "---";
            }
        });

        return {
            username,
            totalSolved,
            totalPoints,
            badges: badges.map(b => b.badge_name),
            rating: primaryBadge, // Used as display status
            prestige: highestStars,
            globalRank,
            error: false
        };
    } catch (error) {
        console.error(`[HackerRank Service] Error for ${username}:`, error.message);
        return { 
            error: true, 
            message: error.response?.status === 404 ? "User not found" : "Failed to fetch HackerRank data" 
        };
    }
};

module.exports = { getHackerrankData };
