const createIssue = require("./issue");
const core = require("@actions/core");

async function run() {
  const newIssue = await createNewIssue();
  console.log(newIssue);
}

run();