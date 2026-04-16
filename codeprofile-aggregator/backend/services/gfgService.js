const axios = require('axios');
const cheerio = require('cheerio');

const getGfgData = async (username) => {
    try {
        const url = `https://www.geeksforgeeks.org/user/${username}/`;
        
        // Add User-Agent to mimic a real browser to bypass basic scraping blocks
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml',
                'Accept-Language': 'en-US,en;q=0.9'
            }
        });

        const $ = cheerio.load(data);

        let codingScore = 0;
        let problemsSolved = 0;
        let streak = 0;

        // Scraper helper to search for labels dynamically in the DOM
        const extractNumberForLabel = (labels) => {
            let val = 0;
            $('*').each(function () {
                // Focus on elements that have no children (leaf nodes) to find exact text matches
                if ($(this).children().length === 0) {
                    const text = $(this).text().trim().toLowerCase();
                    if (labels.includes(text)) {
                        // Check sibling or parent text for the numbers
                        const siblingText = $(this).next().text().trim();
                        if (/^[\d,]+$/.test(siblingText)) {
                            val = parseInt(siblingText.replace(/,/g, ''));
                        } else {
                            // If not in the direct sibling, check the parent text block
                            const parentText = $(this).parent().text().replace(/,/g, '');
                            const matches = parentText.match(/\d+/g);
                            if (matches && matches.length > 0) {
                                val = parseInt(matches[0]);
                            }
                        }
                    }
                }
            });
            return val;
        };

        codingScore = extractNumberForLabel(['overall coding score', 'coding score']);
        problemsSolved = extractNumberForLabel(['total problem solved', 'problems solved']);
        streak = extractNumberForLabel(['current streak', 'streak', 'max streak']);

        // Check if parsing completely failed
        if (codingScore === 0 && problemsSolved === 0 && streak === 0) {
            console.warn(`[GfG Scraper] Found 0 for all stats on user ${username}. DOM might have changed or user has 0 stats.`);
        }

        return {
            codingScore,
            problemsSolved,
            streak
        };

    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error('User not found on GeeksforGeeks');
        }
        
        // Anti-bot detection / Request blocked fallback
        console.warn("GeeksforGeeks scraping failed. Fallback to mock data. Error:", error.message);
        return {
            codingScore: 1254,
            problemsSolved: 342,
            streak: 15,
            isMock: true,
            message: "Failed to scrape GeeksforGeeks, using mock data"
        };
    }
};

module.exports = { getGfgData };
