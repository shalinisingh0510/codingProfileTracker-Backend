const axios = require('axios');
const cheerio = require('cheerio');

const getGfgData = async (username) => {
    try {
        const url = `https://www.geeksforgeeks.org/user/${username}/`;
        
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            }
        });

        const $ = cheerio.load(data);

        // GeeksforGeeks now uses Next.js. Most data is stored in the __NEXT_DATA__ script tag as JSON.
        const nextDataScript = $('#__NEXT_DATA__').html();
        
        if (nextDataScript) {
            try {
                const jsonData = JSON.parse(nextDataScript);
                const userInfo = jsonData.props.pageProps.userInfo;

                if (userInfo) {
                    return {
                        codingScore: userInfo.pod_stats?.score || userInfo.total_score || 0,
                        problemsSolved: userInfo.total_problems_solved || 0,
                        streak: userInfo.pod_stats?.longest_streak || 0,
                        rank: userInfo.rank || "N/A"
                    };
                }
            } catch (err) {
                console.error("Error parsing GfG NEXT_DATA:", err);
            }
        }

        // Fallback: If NEXT_DATA fails, try the older "practice profile" URL which is sometimes more stable for scraping
        const practiceUrl = `https://auth.geeksforgeeks.org/user/${username}/practice/`;
        const practiceResponse = await axios.get(practiceUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const $p = cheerio.load(practiceResponse.data);

        const codingScore = parseInt($p('.score_card_value').eq(0).text()) || 0;
        const totalSolved = parseInt($p('.score_card_value').eq(1).text()) || 0;
        const streak = parseInt($p('.score_card_value').eq(2).text()) || 0;

        if (codingScore > 0 || totalSolved > 0) {
            return {
                codingScore,
                problemsSolved: totalSolved,
                streak
            };
        }

        throw new Error('Could not parse stats from GeeksforGeeks');

    } catch (error) {
        console.warn("GeeksforGeeks scraping failed, returning mock fallback:", error.message);
        return {
            codingScore: 0,
            problemsSolved: 0,
            streak: 0,
            isMock: true,
            error: "Platform changed their layout, using fallback"
        };
    }
};

module.exports = { getGfgData };
