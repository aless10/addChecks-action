const core = require('@actions/core');


// most @actions toolkit packages have async methods
async function run() {
  try {

    core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    console.log("yeeeee")
    core.info((new Date()).toTimeString());

    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

const checks = core.getInput('checks');

for (let i = 0; i < checks; i++) {
  run();
}
