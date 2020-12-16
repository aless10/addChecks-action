const core = require('@actions/core');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run(i) {
  try {
    await wait(parseInt(i) * 100);
  } catch (error) {
    core.setFailed(error.message);
  }
}

const checks = core.getInput('checks');

for (let i = 0; i < checks; i++) {
  run(i);
}
