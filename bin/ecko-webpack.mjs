#!/usr/bin/env node

import { spawnNodeProcess } from '../cli/index.mjs';
import { resolve } from 'path';
import { exit } from 'process';
import chalk from 'chalk';

import {getNodeDirname} from '../cli/node-local-variables.mjs';

/**
 * Setup some helpful constants.
 */
process.env.ECKO_PROJECT_PATH = process.cwd();
process.env.ECKO_PATH = resolve(getNodeDirname(), '../');
process.env.ECKO_ROOT_PATH = resolve(process.env.ECKO_PATH, '../');
process.env.ECKO_COMMAND = process.env.npm_lifecycle_event;

if (!['start'].includes(process.env.ECKO_COMMAND)) {
  console.log(
    chalk.black.bgWhiteBright(`[ecko-webpack] ⛔ ${chalk.bold(process.env.ECKO_COMMAND)} command not found!`),
  );
  exit(1);
}

// Start er up!
spawnNodeProcess(process.env.ECKO_COMMAND, process.argv.slice(2));
