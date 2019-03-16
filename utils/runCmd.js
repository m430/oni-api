function runCmd(cmd, _args, fn) {
  const args = _args || [];
  const runner = require('child_process').spawn(cmd, args);

  runner.on('close', code => {
    if (fn) {
      fn(code);
    }
  })
}

module.exports = runCmd;