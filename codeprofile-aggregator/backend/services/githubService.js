const axios = require('axios');

const getGithubData = async (username) => {
    try {
        const headers = {};
        if (process.env.GITHUB_TOKEN) {
            headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
        }

        // 1. Fetch Basic Profile & Repo Count
        const userRes = await axios.get(`https://api.github.com/users/${username}`, { headers });
        const user = userRes.data;

        // 2. Fetch PRs Count
        const prsRes = await axios.get(`https://api.github.com/search/issues?q=author:${username}+type:pr`, { headers });
        const totalPRs = prsRes.data.total_count || 0;

        // 3. Fetch Issues Count
        const issuesRes = await axios.get(`https://api.github.com/search/issues?q=author:${username}+type:issue`, { headers });
        const totalIssues = issuesRes.data.total_count || 0;

        // 4. Fetch Total Commits (Using search API for all commits by author)
        // Note: Search commits API requires a specific media type
        const commitsRes = await axios.get(`https://api.github.com/search/commits?q=author:${username}`, {
            headers: {
                ...headers,
                'Accept': 'application/vnd.github.cloak-preview'
            }
        });
        const totalCommits = commitsRes.data.total_count || 0;

        // 5. Fetch Contribution Graph Data (Using a dedicated public proxy for full calendar)
        let contributionGraph = [];
        try {
            const contributionRes = await axios.get(`https://github-contributions-api.deno.dev/${username}.json`);
            if (contributionRes.data && contributionRes.data.contributions) {
                // Get last 30 days of contributions
                const allContributions = contributionRes.data.contributions.flat();
                contributionGraph = allContributions
                    .slice(-30)
                    .map(day => ({
                        date: day.date,
                        count: day.contributionCount
                    }));
            }
        } catch (err) {
            console.warn("GitHub Contribution Graph API failed:", err.message);
        }

        return {
            username: user.login,
            avatarUrl: user.avatar_url,
            bio: user.bio,
            publicRepos: user.public_repos,
            followers: user.followers,
            totalPRs,
            totalIssues,
            totalCommits,
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
