const { getLeetCodeData } = require('./services/leetcodeService');
const { getGithubData } = require('./services/githubService');

async function test() {
    try {
        console.log("Fetching leetcode...");
        let leetcodeData = await getLeetCodeData("shalinisingh0510").catch(() => ({ error: true }));
        console.log("Fetching github...");
        let githubData = await getGithubData("shalinisingh0510").catch(() => ({ error: true }));

        const sanitizeData = (data) => {
            if (!data) return data;
            const clean = { ...data };
            delete clean.ratingGraph;
            delete clean.solvedGraph;
            delete clean.contributionGraph;
            delete clean.badges;
            return clean;
        };

        leetcodeData = sanitizeData(leetcodeData);
        githubData = sanitizeData(githubData);

        const prompt = `Test
LeetCode: ${JSON.stringify(leetcodeData)}
GitHub: ${JSON.stringify(githubData)}
`;
        console.log("Stringified OK.");
    } catch(err) {
        console.error("Error:", err);
    }
}
test();
