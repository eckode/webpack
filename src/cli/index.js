#!/usr/bin/env node

const { platform } = require("os");
const { spawnSync } = require("child_process");
const { exit } = require("process");
const { readdirSync, existsSync } = require("fs");
const path = require("path");

const spawnNodeProcess = (
  scriptName = "start",
  args = [],
  nodeArgs = [],
) => {
  if (!hasScriptFile(scriptName)) {
    console.log(`Unknown command "${scriptName}"`);
    exit(1);
  }

  // console.log(chalk.white.bgBlack('SPAWN_NODE_PROCESS:\n'));
  // console.log(chalk.white(JSON.stringify({ nodeArgs, script: fromScriptsRoot(scriptName), args }, null, 2)));

  const { signal, status } = spawnSync(
    'node',
    [...nodeArgs, fromScriptsRoot(scriptName), ...args],
    {
      stdio: "inherit",
      shell: platform() === "win32",
    },
  );

  if (signal) {
    handleSignal(signal);
  }

  exit(status ?? 1);
};

function fromScriptsRoot(scriptName) {
  return path.join(path.dirname(__dirname), "commands", `${scriptName}.js`);
}

function hasScriptFile(scriptName) {
  return existsSync(fromScriptsRoot(scriptName));
}

function getScripts() {
  return readdirSync(path.join(path.dirname(__dirname), "commands"))
    .filter((f) => path.extname(f) === ".js")
    .map((f) => path.basename(f, ".js"));
}

function handleSignal(signal) {
  if (signal === "SIGKILL") {
    // eslint-disable-next-line no-console
    console.log(
      "The script failed because the process exited too early. " +
        "This probably means the system ran out of memory or someone called " +
        "`kill -9` on the process.",
    );
  } else if (signal === "SIGTERM") {
    // eslint-disable-next-line no-console
    console.log(
      "The script failed because the process exited too early. " +
        "Someone might have called `kill` or `killall`, or the system could " +
        "be shutting down.",
    );
  }
  exit(1);
}

// function fromProjectRoot(fileName: string) {
//   return path.join(path.dirname(getPackagePath()), fileName);
// }

module.exports = {
  spawnNodeProcess,
};
