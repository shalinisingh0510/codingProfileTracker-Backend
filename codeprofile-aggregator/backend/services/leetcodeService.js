const axios = require('axios');

const getLeetCodeData = async (username) => {
    try {
        const query = `
            query getUserProfile($username: String!) {
                matchedUser(username: $username) {
                    submitStats: submitStatsGlobal {
                        acSubmissionNum {
                            difficulty
                            count
                        }
                    }
                }
                userCalendar(username: $username) {
                    submissionCalendar
                }
            }
        `;

        const response = await axios.post('https://leetcode.com/graphql', {
            query: query,
            variables: { username }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Referer': 'https://leetcode.com'
            }
        });

        if (response.data.errors) {
            throw new Error(response.data.errors[0].message || 'User not found');
        }

        const matchedUser = response.data.data.matchedUser;
        const userCalendar = response.data.data.userCalendar;

        if (!matchedUser) {
            throw new Error('User not found on LeetCode');
        }

        const stats = matchedUser.submitStats.acSubmissionNum;
        
        let totalSolved = 0;
        let easySolved = 0;
        let mediumSolved = 0;
        let hardSolved = 0;

        stats.forEach(stat => {
            if (stat.difficulty === 'All') totalSolved = stat.count;
            if (stat.difficulty === 'Easy') easySolved = stat.count;
            if (stat.difficulty === 'Medium') mediumSolved = stat.count;
            if (stat.difficulty === 'Hard') hardSolved = stat.count;
        });

        return {
            totalSolved,
            easySolved,
            mediumSolved,
            hardSolved,
            submissionCalendar: JSON.parse(userCalendar.submissionCalendar || '{}')
        };
    } catch (error) {
        // Fallback to mock data if API limits us or we get forbidden/CORS error
        console.warn("Leetcode API error detected or using mock fallback:", error.message);
        return {
            totalSolved: 154,
            easySolved: 80,
            mediumSolved: 60,
            hardSolved: 14,
            submissionCalendar: {
                "1711929600": 1,
                "1712016000": 3,
                "1712102400": 5
            },
            isMock: true,
            message: "Failed to fetch from LeetCode, using mock data"
        };
    }
};

module.exports = { getLeetCodeData };
