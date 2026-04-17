const axios = require('axios');
const cheerio = require('cheerio');

const getGithubData = async (username) => {
    try {
        console.log(`[GitHub Service] Fetching data for: ${username}`);
        const headers = {};
        if (process.env.GITHUB_TOKEN) {
            headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
        }

        // 1. Fetch Basic Profile - This is the most critical call
        let user;
        try {
            const userRes = await axios.get(`https://api.github.com/users/${username}`, { headers });
            user = userRes.data;
        } catch (err) {
            console.error(`[GitHub Service] Critical error fetching user ${username}:`, err.message);
            throw new Error(`GitHub user "${username}" not found or API error`);
        }

        // 2. Fetch Stats concurrently with individual catch blocks to prevent one failure from blocking others
        // Search API has low rate limits (10/min unauthenticated), so we handle them specially
        const [prsRes, issuesRes, contributionsRes] = await Promise.all([
            axios.get(`https://api.github.com/search/issues?q=author:${username}+type:pr`, { headers })
                .catch(err => {
                    console.warn(`[GitHub Service] PR search failed for ${username} (Rate limit?):`, err.message);
                    return { data: { total_count: 0 } };
                }),
            axios.get(`https://api.github.com/search/issues?q=author:${username}+type:issue`, { headers })
                .catch(err => {
                    console.warn(`[GitHub Service] Issue search failed for ${username}:`, err.message);
                    return { data: { total_count: 0 } };
                }),
            axios.get(`https://github-contributions-api.deno.dev/${username}.json`)
                .catch(err => {
                    console.warn(`[GitHub Service] Contributions API failed for ${username}:`, err.message);
                    return { data: null };
                })
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
            
            if (data.total) {
                totalContributions = Object.values(data.total).reduce((a, b) => a + b, 0);
                contributionsLastYear = data.total[currentYear] || data.total[currentYear - 1] || 0;
            }

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

        // Fallback for Total Contributions if API failed: Use a heuristic based on repos and followers
        if (totalContributions === 0) {
            totalContributions = (user.public_repos * 5) + (user.followers * 2) + totalPRs + totalIssues;
            console.log(`[GitHub Service] Using heuristic fallback for total contributions: ${totalContributions}`);
        }

        // 4. Scrape Achievements - Non-blocking
        let achievements = [];
        try {
            const profileRes = await axios.get(`https://github.com/${username}`, {
                headers: { 'User-Agent': 'Mozilla/5.0' },
                timeout: 5000 // Don't hang for too long
            });
            const $ = cheerio.load(profileRes.data);
            $('.achievement-badge-card img').each((i, el) => {
                const alt = $(el).attr('alt');
                if (alt && alt.startsWith('Achievement:')) {
                    achievements.push(alt.replace('Achievement: ', ''));
                }
            });
        } catch (err) {
            console.warn(`[GitHub Service] Achievements scraping failed for ${username}:`, err.message);
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
            achievements: achievements.slice(0, 5),
            contributionGraph
        };

    } catch (error) {
        console.error(`[GitHub Service] Final Service Error for ${username}:`, error.message);
        return {
            error: true,
            message: error.message || "Failed to fetch GitHub data"
        };
    }
};

module.exports = { getGithubData };
