const axios = require('axios');

const getLeetCodeData = async (username) => {
    try {
        // 1. Fetch Basic Stats (Easy, Medium, Hard, Total)
        const statsUrl = `https://leetcode-stats-api.herokuapp.com/${username}`;
        const statsRes = await axios.get(statsUrl);
        
        if (statsRes.data.status !== 'success') {
            throw new Error('User not found on LeetCode');
        }

        const stats = statsRes.data;

        // 2. Fetch Contest Ranking & History (for Rating Graph)
        // Using another stable proxy for contest data
        let ratingGraph = [];
        let contestsParticipated = 0;
        let currentRating = 0;

        try {
            const contestUrl = `https://alfa-leetcode-api.onrender.com/${username}/contest`;
            const contestRes = await axios.get(contestUrl);
            
            if (contestRes.data && contestRes.data.contestRanking) {
                currentRating = Math.round(contestRes.data.contestRanking.rating);
                contestsParticipated = contestRes.data.contestRanking.attendedContestsCount;
                
                // Format the history for the graph
                ratingGraph = (contestRes.data.contestHistory || [])
                    .filter(entry => entry.attended)
                    .map(entry => ({
                        contestName: entry.contest.title,
                        rating: Math.round(entry.rating),
                        rank: entry.ranking,
                        date: new Date(entry.contest.startTime * 1000).toISOString().split('T')[0]
                    }));
            }
        } catch (err) {
            console.warn("LeetCode Contest API failed, skipping rating graph:", err.message);
        }

        // 3. Process Submission Calendar (for Solved Graph)
        let solvedGraph = [];
        let solvedThisYear = 0;
        const currentYear = new Date().getFullYear();

        if (stats.submissionCalendar) {
            // submissionCalendar is { "timestamp": count, ... }
            const calendar = stats.submissionCalendar;
            const dailyData = Object.entries(calendar)
                .map(([timestamp, count]) => {
                    const date = new Date(parseInt(timestamp) * 1000);
                    if (date.getFullYear() === currentYear) {
                        solvedThisYear += count;
                    }
                    return {
                        dateStr: date.toISOString().split('T')[0],
                        count: count
                    };
                })
                .sort((a, b) => new Date(a.dateStr) - new Date(b.dateStr));

            // Last 30 days for graph
            solvedGraph = dailyData.slice(-30).map(d => ({ date: d.dateStr, count: d.count }));
        }

        return {
            totalSolved: stats.totalSolved,
            easySolved: stats.easySolved,
            mediumSolved: stats.mediumSolved,
            hardSolved: stats.hardSolved,
            acceptanceRate: stats.acceptanceRate,
            ranking: stats.ranking,
            rating: currentRating,
            contestsParticipated,
            solvedThisYear,
            ratingGraph,
            solvedGraph
        };

    } catch (error) {
        console.warn(`LeetCode Service Error for ${username}:`, error.message);
        return {
            totalSolved: 0,
            easySolved: 0,
            mediumSolved: 0,
            hardSolved: 0,
            isMock: true,
            message: "Failed to fetch dynamic data"
        };
    }
};

module.exports = { getLeetCodeData };
