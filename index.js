const core = require('@actions/core');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run(i, total) {
  try {

    core.info(`Doing task ${i}/${total}`);
    core.debug("I'm very busy...");
    await wait(parseInt(i) * 100);
    core.info(`Completed task ${i}/${total}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

const checks = core.getInput('checks');

for (let i = 1; i <= checks; i++) {
  run(i, checks);
}
