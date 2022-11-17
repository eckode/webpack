#!/usr/bin/env node

const {spawnNodeProcess} = require("../src/cli/index.js");
const path = require("path");
const { exit } = require("process");
const chalk = require("chalk");

/**
 * Setup some helpful constants.
 */
process.env.ECKO_PROJECT_PATH = process.cwd();
process.env.ECKO_PATH = path.resolve(__dirname, '../');
process.env.ECKO_COMMAND = process.env.npm_lifecycle_event;

if(!['start'].includes(process.env.ECKO_COMMAND)){
  console.log(chalk.black.bgWhiteBright(`[ecko-webpack] ⛔ ${chalk.bold(process.env.ECKO_COMMAND)} command not found!`));
  exit(1);
}

// Start er up!
spawnNodeProcess(
  process.env.ECKO_COMMAND,
  process.argv.slice(2)
);
