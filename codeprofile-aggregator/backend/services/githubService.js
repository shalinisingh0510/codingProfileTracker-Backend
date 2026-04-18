const axios = require('axios');
const cheerio = require('cheerio');

const getGithubData = async (username) => {
    try {
        console.log(`[GitHub Service] Fetching data for: ${username}`);
        const token = process.env.GITHUB_TOKEN;
        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};

        // --- NEW: If Token is present, use GraphQL (Faster & More Accurate) ---
        if (token) {
            try {
                const query = `
                query($username: String!) {
                  user(login: $username) {
                    login
                    avatarUrl
                    bio
                    followers { totalCount }
                    repositories(first: 0) { totalCount }
                    contributionsCollection {
                      totalRepositoryContributions
                      totalCommitContributions
                      totalPullRequestContributions
                      totalIssueContributions
                      contributionCalendar {
                        totalContributions
                        weeks {
                          contributionDays {
                            contributionCount
                            date
                          }
                        }
                      }
                    }
                  }
                }`;
                
                const gqlRes = await axios.post('https://api.github.com/graphql', { 
                    query, 
                    variables: { username } 
                }, { headers });

                if (gqlRes.data.data && gqlRes.data.data.user) {
                    const u = gqlRes.data.data.user;
                    const cc = u.contributionsCollection;
                    const cal = cc.contributionCalendar;
                    
                    const contributionGraph = cal.weeks.flatMap(w => w.contributionDays).slice(-60).map(d => ({
                        date: d.date,
                        count: d.contributionCount
                    }));

                    return {
                        username: u.login,
                        avatarUrl: u.avatarUrl,
                        bio: u.bio,
                        publicRepos: u.repositories.totalCount,
                        followers: u.followers.totalCount,
                        totalPRs: cc.totalPullRequestContributions,
                        totalIssues: cc.totalIssueContributions,
                        totalContributions: cal.totalContributions,
                        contributionsLastYear: cal.totalContributions,
                        achievements: [], 
                        contributionGraph
                    };
                }
            } catch (gqlErr) {
                console.warn(`[GitHub Service] GraphQL failed, falling back to REST:`, gqlErr.message);
            }
        }

        // --- REST Version (Improved with better fallbacks and bug fixes) ---
        let user;
        try {
            const userRes = await axios.get(`https://api.github.com/users/${username}`, { headers: token ? { 'Authorization': `token ${token}` } : {} });
            user = userRes.data;
        } catch (err) {
            console.error(`[GitHub Service] Critical error fetching user ${username}:`, err.message);
            throw new Error(`GitHub user "${username}" not found or API error`);
        }

        const [prsRes, issuesRes, contributionsRes] = await Promise.all([
            axios.get(`https://api.github.com/search/issues?q=author:${username}+type:pr`, { headers: token ? { 'Authorization': `token ${token}` } : {} })
                .catch(err => ({ data: { total_count: 0 } })),
            axios.get(`https://api.github.com/search/issues?q=author:${username}+type:issue`, { headers: token ? { 'Authorization': `token ${token}` } : {} })
                .catch(err => ({ data: { total_count: 0 } })),
            axios.get(`https://github-contributions-api.deno.dev/${username}.json`).catch(() => ({ data: null }))
        ]);

        const totalPRs = prsRes.data?.total_count || 0;
        const totalIssues = issuesRes.data?.total_count || 0;
        
        let contributionGraph = [];
        let totalContributions = 0;
        let contributionsLastYear = 0;
        const currentYear = new Date().getFullYear();

        // FIX: Critical bug where it crashed if contributionsRes.data was null
        if (contributionsRes && contributionsRes.data) {
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
