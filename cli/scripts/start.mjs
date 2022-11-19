/**
 * External dependencies
 */
import { platform } from 'os';
import { spawnSync } from 'child_process';
import { sync as resolveBin } from 'resolve-bin';
const { ECKO_PATH } = process.env;

import { normalize } from 'path';

// @TODO Make args dynamic.
const { status } = spawnSync(
  resolveBin('webpack'),
  ['serve', '--config', normalize(`${ECKO_PATH}/.webpack/webpack.dev.mjs`)],
  {
    stdio: 'inherit',
    shell: platform() === 'win32',
  },
);

process.exit(status ?? 1);
