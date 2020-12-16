const core = require('@actions/core');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run(i) {
  try {

    core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    await wait(parseInt(i) * 100);
    core.info((new Date()).toTimeString());

    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

const checks = core.getInput('checks');

for (let i = 0; i < checks; i++) {
  run(i);
}
