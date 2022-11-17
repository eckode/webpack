/**
 * External dependencies
 */
 const {platform} = require("os");
 const {spawnSync} = require("child_process");
 const { sync: resolveBin } = require("resolve-bin");
 const {ECKO_PATH, ECKO_PROJECT_PATH} = process.env;

const path = require("path");

// @TODO Make args dynamic.
const { status } = spawnSync(
  resolveBin("webpack"),
  [
    "serve",
    "--mode",
    "development",
    "--config",
    path.normalize(`${ECKO_PATH}/.webpack/webpack.dev.js`),
  ],
  {
    stdio: "inherit",
    shell: platform().includes("win"),
    // ECKO_PATH, 
    // ECKO_PROJECT_PATH,
  },
);

process.exit(status ?? 1);
