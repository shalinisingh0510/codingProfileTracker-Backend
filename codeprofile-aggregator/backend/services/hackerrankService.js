const axios = require('axios');

const getHackerrankData = async (username) => {
    try {
        console.log(`[HackerRank Service] Fetching data for: ${username}`);

        // Fetch badges and certifications in parallel
        const [badgesRes, certsRes] = await Promise.all([
            axios.get(`https://www.hackerrank.com/rest/hackers/${username}/badges`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                },
                timeout: 10000
            }).catch(() => ({ data: null })),
            axios.get(`https://www.hackerrank.com/rest/hackers/${username}/certificates`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                },
                timeout: 10000
            }).catch(() => ({ data: null }))
        ]);

        // Process Badges
        let badges = [];
        let totalSolved = 0;
        let highestStars = 0;
        let primaryBadge = "Badge Explorer";
        let totalPoints = 0;
        let globalRank = "---";

        if (badgesRes.data && badgesRes.data.models) {
            badges = badgesRes.data.models;

            badges.forEach(badge => {
                totalSolved += (badge.solved || 0);
                totalPoints += (badge.total_points || 0);
                
                if (badge.stars > highestStars) {
                    highestStars = badge.stars;
                    primaryBadge = `${badge.badge_name} (${highestStars}★)`;
                    globalRank = badge.hacker_rank ? `#${badge.hacker_rank.toLocaleString()}` : "---";
                }
            });
        } else {
            return { error: true, message: "HackerRank profile not found or private" };
        }

        // Process Certifications
        let certifications = [];
        if (certsRes.data && certsRes.data.data) {
            certifications = certsRes.data.data.map(cert => ({
                name: cert.attributes?.certificate_name || cert.attributes?.label || 'Unknown',
                level: cert.attributes?.level || null,
                status: cert.attributes?.status || 'verified'
            }));
        }

        return {
            username,
            totalSolved,
            totalPoints,
            badges: badges.map(b => ({
                name: b.badge_name,
                stars: b.stars || 0,
                solved: b.solved || 0
            })),
            badgeNames: badges.map(b => b.badge_name),
            certifications,
            rating: primaryBadge,
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
