const axios = require('axios');

const getLeetCodeData = async (username) => {
    try {
        // 1. Fetch Basic Stats & Profile
        const profileUrl = `https://alfa-leetcode-api.onrender.com/${username}`;
        const solvedUrl = `https://alfa-leetcode-api.onrender.com/${username}/solved`;
        const calendarUrl = `https://alfa-leetcode-api.onrender.com/${username}/calendar`;
        const contestUrl = `https://alfa-leetcode-api.onrender.com/${username}/contest`;

        // Fetching concurrently for performance
        const [profileRes, solvedRes, calendarRes, contestRes] = await Promise.all([
            axios.get(profileUrl).catch(() => ({ data: {} })),
            axios.get(solvedUrl).catch(() => ({ data: {} })),
            axios.get(calendarUrl).catch(() => ({ data: {} })),
            axios.get(contestUrl).catch(() => ({ data: {} }))
        ]);

        if (!solvedRes.data || solvedRes.data.errors) {
            throw new Error('User not found or LeetCode API error');
        }

        const stats = solvedRes.data;
        const profile = profileRes.data;
        const calendarData = calendarRes.data;

        // 2. Process Contest Ranking & History
        let ratingGraph = [];
        let contestsParticipated = 0;
        let currentRating = 0;

        if (contestRes.data && contestRes.data.contestRanking) {
            currentRating = Math.round(contestRes.data.contestRanking.rating);
            contestsParticipated = contestRes.data.contestRanking.attendedContestsCount;
            
            ratingGraph = (contestRes.data.contestHistory || [])
                .filter(entry => entry.attended)
                .map(entry => ({
                    contestName: entry.contest.title,
                    rating: Math.round(entry.rating),
                    rank: entry.ranking,
                    date: new Date(entry.contest.startTime * 1000).toISOString().split('T')[0]
                }));
        }

        // 3. Process Submission Calendar (for Solved Graph)
        let solvedGraph = [];
        let solvedThisYear = 0;
        const currentYear = new Date().getFullYear();

        if (calendarData && calendarData.submissionCalendar) {
            let calendar = calendarData.submissionCalendar;
            
            if (typeof calendar === 'string') {
                try {
                    calendar = JSON.parse(calendar);
                } catch (e) {
                    calendar = {};
                }
            }

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
            totalSolved: stats.solvedProblem || 0,
            easySolved: stats.easySolved || 0,
            mediumSolved: stats.mediumSolved || 0,
            hardSolved: stats.hardSolved || 0,
            acceptanceRate: profile.acceptanceRate || 0,
            ranking: profile.ranking || 'N/A',
            rating: currentRating,
            contestsParticipated,
            solvedThisYear,
            ratingGraph,
            solvedGraph
        };

    } catch (error) {
        console.warn(`LeetCode Service Error for ${username}:`, error.message);
        return {
            error: true,
            message: error.message,
            totalSolved: 0,
            easySolved: 0,
            mediumSolved: 0,
            hardSolved: 0,
            isMock: true
        };
    }
};

module.exports = { getLeetCodeData };
