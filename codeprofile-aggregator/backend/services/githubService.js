const axios = require('axios');
const cheerio = require('cheerio');

const getGithubData = async (username) => {
    try {
        const headers = {};
        if (process.env.GITHUB_TOKEN) {
            headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
        }

        // 1. Fetch Basic Profile
        const userRes = await axios.get(`https://api.github.com/users/${username}`, { headers });
        const user = userRes.data;

        // 2. Fetch Stats concurrently
        const [prsRes, issuesRes, contributionsRes] = await Promise.all([
            axios.get(`https://api.github.com/search/issues?q=author:${username}+type:pr`, { headers }).catch(() => ({ data: { total_count: 0 } })),
            axios.get(`https://api.github.com/search/issues?q=author:${username}+type:issue`, { headers }).catch(() => ({ data: { total_count: 0 } })),
            axios.get(`https://github-contributions-api.deno.dev/${username}.json`).catch(() => ({ data: null }))
        ]);

        const totalPRs = prsRes.data.total_count || 0;
        const totalIssues = issuesRes.data.total_count || 0;
        
        // 3. Process Contributions
        let contributionGraph = [];
        let totalContributions = 0;
        let contributionsLastYear = 0;
        const currentYear = new Date().getFullYear();

        if (contributionsRes.data) {
            const data = contributionsRes.data;
            
            // Calculate total from data.total object if exists
            if (data.total) {
                totalContributions = Object.values(data.total).reduce((a, b) => a + b, 0);
                contributionsLastYear = data.total[currentYear] || data.total[currentYear - 1] || 0;
            }

            // Get last 60 days of contributions for a more detailed graph
            if (data.contributions) {
                const allContributions = data.contributions.flat();
                contributionGraph = allContributions
                    .slice(-60)
                    .map(day => ({
                        date: day.date,
                        count: day.contributionCount
                    }));
            }
        }

        // 4. Scrape Achievements
        let achievements = [];
        try {
            const profileRes = await axios.get(`https://github.com/${username}`, {
                headers: { 'User-Agent': 'Mozilla/5.0' }
            });
            const $ = cheerio.load(profileRes.data);
            $('.achievement-badge-card img').each((i, el) => {
                const alt = $(el).attr('alt');
                if (alt && alt.startsWith('Achievement:')) {
                    achievements.push(alt.replace('Achievement: ', ''));
                }
            });
        } catch (err) {
            console.warn("GitHub Achievements scraping failed:", err.message);
        }

        return {
            username: user.login,
            avatarUrl: user.avatar_url,
            bio: user.bio,
            publicRepos: user.public_repos,
            followers: user.followers,
            totalPRs,
            totalIssues,
            totalContributions,
            contributionsLastYear,
            achievements: achievements.slice(0, 5), // Keep it concise
            contributionGraph
        };

    } catch (error) {
        console.error("GitHub Service Error:", error.message);
        return {
            error: true,
            message: error.message || "Failed to fetch GitHub data"
        };
    }
};

module.exports = { getGithubData };
