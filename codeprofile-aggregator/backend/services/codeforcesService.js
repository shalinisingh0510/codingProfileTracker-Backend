const axios = require('axios');

const fetchWithRetry = async (url, options = {}, retries = 3, delay = 300) => {
    try {
        return await axios.get(url, options);
    } catch (err) {
        if (retries > 0 && (!err.response || err.response.status === 503 || err.response.status === 429)) {
            console.warn(`Codeforces request failed. Retrying... (${retries} retries left)`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return fetchWithRetry(url, options, retries - 1, delay * 1.5);
        }
        throw err;
    }
};

const getCodeforcesData = async (handle) => {
    try {
        // 1. Fetch user info (rating, rank) - REQUIRED
        const infoRes = await fetchWithRetry(`https://codeforces.com/api/user.info?handles=${handle}`);
        if (infoRes.data.status !== 'OK' || infoRes.data.result.length === 0) {
            throw new Error('User not found on Codeforces');
        }
        const user = infoRes.data.result[0];

        // 2. Fetch user rating history - OPTIONAL (with retry and graceful fallback)
        let ratingHistory = [];
        let contestsParticipated = 0;
        try {
            const ratingRes = await fetchWithRetry(`https://codeforces.com/api/user.rating?handle=${handle}`, {}, 2, 200);
            if (ratingRes.data.status === 'OK') {
                ratingHistory = ratingRes.data.result;
                contestsParticipated = ratingHistory.length;
            }
        } catch (err) {
            console.warn(`Codeforces rating history fetch failed for ${handle}:`, err.message);
        }

        // 3. Fetch user status (submissions) - OPTIONAL (with retry and graceful fallback)
        let totalSolved = 0;
        let solvedThisYear = 0;
        const dailyStats = {};
        const solvedProblems = new Set();
        try {
            const statusRes = await fetchWithRetry(`https://codeforces.com/api/user.status?handle=${handle}`, {}, 2, 200);
            if (statusRes.data.status === 'OK') {
                const submissions = statusRes.data.result;
                const currentYear = new Date().getFullYear();
                
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

                            const dateStr = date.toISOString().split('T')[0];
                            dailyStats[dateStr] = (dailyStats[dateStr] || 0) + 1;
                        }
                    }
                });
            }
        } catch (err) {
            console.warn(`Codeforces status fetch failed for ${handle}:`, err.message);
        }

        return {
            rating: user.rating || 0,
            maxRating: user.maxRating || 0,
            rank: user.rank || 'Unrated',
            contribution: user.contribution || 0,
            totalSolved,
            solvedThisYear,
            contestsParticipated,
            ratingGraph: ratingHistory.map(entry => ({
                contestName: entry.contestName,
                rating: entry.newRating,
                date: new Date(entry.ratingUpdateTimeSeconds * 1000).toISOString().split('T')[0]
            })),
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
