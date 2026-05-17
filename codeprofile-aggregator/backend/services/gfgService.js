const axios = require('axios');
const cheerio = require('cheerio');

const getGfgData = async (username) => {
    try {
        const url = `https://www.geeksforgeeks.org/user/${username}/`;
        
        const { data: html } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            }
        });

        // 1. Try to find and parse the userData block from the Next.js RSC payload
        const cleanHtml = html.replace(/\\"/g, '"');
        const startIdx = cleanHtml.indexOf('"userData"');
        if (startIdx !== -1) {
            const braceStart = cleanHtml.indexOf('{', startIdx);
            if (braceStart !== -1) {
                let braceCount = 0;
                let jsonStr = "";
                for (let i = braceStart; i < cleanHtml.length; i++) {
                    const char = cleanHtml[i];
                    jsonStr += char;
                    if (char === '{') {
                        braceCount++;
                    } else if (char === '}') {
                        braceCount--;
                        if (braceCount === 0) {
                            break;
                        }
                    }
                }
                
                if (jsonStr) {
                    const userData = JSON.parse(jsonStr);
                    const userInfo = userData.data;
                    if (userInfo) {
                        return {
                            codingScore: userInfo.score || 0,
                            problemsSolved: userInfo.total_problems_solved || 0,
                            streak: userInfo.pod_solved_longest_streak || 0,
                            rank: userInfo.institute_rank || "N/A"
                        };
                    }
                }
            }
        }

        // 2. Fallback: robust regex parsing directly from the HTML
        const scoreMatch = html.match(/\\?"score\\?":\s*(\d+)/);
        const solvedMatch = html.match(/\\?"total_problems_solved\\?":\s*(\d+)/);
        const streakMatch = html.match(/\\?"pod_solved_longest_streak\\?":\s*(\d+)/);
        const rankMatch = html.match(/\\?"institute_rank\\?":\s*(\d+)/);

        if (scoreMatch || solvedMatch) {
            return {
                codingScore: scoreMatch ? parseInt(scoreMatch[1]) : 0,
                problemsSolved: solvedMatch ? parseInt(solvedMatch[1]) : 0,
                streak: streakMatch ? parseInt(streakMatch[1]) : 0,
                rank: rankMatch ? rankMatch[1] : "N/A"
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
