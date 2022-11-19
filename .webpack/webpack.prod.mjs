// production config
const { merge } = require("webpack-merge");
const { normalize } = require("path");

const {common} = require("./webpack.common");
const { env: {ECKO_PROJECT_PATH = process.cwd()} } = process;

console.log("Using webpack.prod");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: normalize(`${ECKO_PROJECT_PATH}/dist`),
    publicPath: "/",
  },
  devtool: "source-map",
});
