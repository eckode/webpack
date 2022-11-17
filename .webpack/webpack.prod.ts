// production config
import {merge} from "webpack-merge";
import {resolve} from "path";

const commonConfig = require("./webpack.common");

console.log('Using webpack.prod');

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve( process.cwd(), 'dist' ),
    publicPath: "/",
  },
  devtool: "source-map",
});
