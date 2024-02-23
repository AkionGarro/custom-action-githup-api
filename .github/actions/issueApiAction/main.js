const createIssue = require("./issue");

async function run() {
  const newIssue = await createIssue();
  console.log(newIssue);
}

run();