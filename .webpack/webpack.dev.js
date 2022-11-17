// development config
const webpack = require("webpack");
const {merge} = require("webpack-merge");
const { normalize } = require("path");
const { common } = require("./webpack.common.js");

const { env: {ECKO_PROJECT_PATH} } = process;

console.log('Using webpack.dev', process.cwd());

module.exports = merge(common, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "[name].js",
    path: normalize(`${ECKO_PROJECT_PATH}/dist`),
    clean: true,
  },
});
