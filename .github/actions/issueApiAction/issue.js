const { Octokit } = require("@octokit/core")

const octokit = new Octokit({
    auth: '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'
})


async function createNewIssue() {
    const res = await octokit.request('POST /repos/{owner}/{repo}/issues', {
        owner: 'AkionGarro',
        repo: 'custom-action-githup-api',
        title: 'Found a bug',
        body: 'I\'m having a problem with this.',
        assignees: [
            'octocat'
        ],
        milestone: 1,
        labels: [
            'bug'
        ],
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    return res
}

module.exports = createNewIssue;

