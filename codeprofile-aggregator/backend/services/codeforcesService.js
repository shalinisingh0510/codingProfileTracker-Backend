const axios = require('axios');

const getCodeforcesData = async (handle) => {
    try {
        // Fetch user info (rating, rank)
        const infoRes = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
        
        if (infoRes.data.status !== 'OK' || infoRes.data.result.length === 0) {
            throw new Error('User not found on Codeforces');
        }

        const user = infoRes.data.result[0];

        // Fetch user status to count unique solved problems
        const statusRes = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}`);
        
        let solvedCount = 0;
        if (statusRes.data.status === 'OK') {
            const submissions = statusRes.data.result;
            const solvedProblems = new Set();
            
            submissions.forEach(sub => {
                if (sub.verdict === 'OK') {
                    // Unique problem is identified by contestId and index
                    solvedProblems.add(`${sub.problem.contestId}-${sub.problem.index}`);
                }
            });
            solvedCount = solvedProblems.size;
        }

        return {
            rating: user.rating || 0,
            maxRating: user.maxRating || 0,
            rank: user.rank || 'Unrated',
            contribution: user.contribution || 0,
            totalSolved: solvedCount
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
