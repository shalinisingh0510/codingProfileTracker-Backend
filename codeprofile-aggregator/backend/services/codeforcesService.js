const axios = require('axios');

const getCodeforcesData = async (handle) => {
    try {
        // 1. Fetch user info (rating, rank)
        const infoRes = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
        if (infoRes.data.status !== 'OK' || infoRes.data.result.length === 0) {
            throw new Error('User not found on Codeforces');
        }
        const user = infoRes.data.result[0];

        // 2. Fetch user rating history (for rating graph and contest count)
        const ratingRes = await axios.get(`https://codeforces.com/api/user.rating?handle=${handle}`);
        const ratingHistory = ratingRes.data.status === 'OK' ? ratingRes.data.result : [];
        const contestsParticipated = ratingHistory.length;

        // 3. Fetch user status (for solved problems and graphs)
        const statusRes = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}`);
        
        let totalSolved = 0;
        let solvedThisYear = 0;
        const currentYear = new Date().getFullYear();
        const dailyStats = {}; // To build a problem solved graph (date -> count)
        const solvedProblems = new Set();
        
        if (statusRes.data.status === 'OK') {
            const submissions = statusRes.data.result;
            
            submissions.forEach(sub => {
                if (sub.verdict === 'OK') {
                    const problemKey = `${sub.problem.contestId}-${sub.problem.index}`;
                    
                    if (!solvedProblems.has(problemKey)) {
                        solvedProblems.add(problemKey);
                        totalSolved++;
                        
                        const date = new Date(sub.creationTimeSeconds * 1000);
                        if (date.getFullYear() === currentYear) {
                            solvedThisYear++;
                        }

                        // For graph: Get date string YYYY-MM-DD
                        const dateStr = date.toISOString().split('T')[0];
                        dailyStats[dateStr] = (dailyStats[dateStr] || 0) + 1;
                    }
                }
            });
        }

        return {
            rating: user.rating || 0,
            maxRating: user.maxRating || 0,
            rank: user.rank || 'Unrated',
            contribution: user.contribution || 0,
            totalSolved,
            solvedThisYear,
            contestsParticipated,
            // Rating history for the graph
            ratingGraph: ratingHistory.map(entry => ({
                contestName: entry.contestName,
                rating: entry.newRating,
                date: new Date(entry.ratingUpdateTimeSeconds * 1000).toISOString().split('T')[0]
            })),
            // Daily solved stats for the graph (showing last 30 entries to keep response light)
            solvedGraph: Object.entries(dailyStats)
                .sort((a, b) => new Date(a[0]) - new Date(b[0]))
                .slice(-30)
                .map(([date, count]) => ({ date, count }))
        };

    } catch (error) {
        console.error("Codeforces Service Error:", error.message);
        if (error.response && error.response.data && error.response.data.comment) {
            throw new Error(error.response.data.comment);
        }
        throw new Error('Error fetching Codeforces data');
    }
};

module.exports = { getCodeforcesData };
