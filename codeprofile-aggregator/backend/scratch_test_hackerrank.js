const axios = require('axios');

async function testHackerRank() {
    const username = 'shalinishareyas1';
    const url = `https://www.hackerrank.com/rest/contests/master/users/${username}/profile`;
    
    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        console.log('HackerRank Response:', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error('Error fetching HackerRank data:', error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        }
    }
}

testHackerRank();
