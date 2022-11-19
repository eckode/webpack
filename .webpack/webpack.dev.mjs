/**
 * Eckode/Webpack dev
 */
/**
 * Imports
 */
import webpack from "webpack";
import { merge } from "webpack-merge";
import { normalize } from "path";
import { commonConfig } from "./webpack.common.mjs";

const { env: {ECKO_PROJECT_PATH = process.cwd()} } = process;

export const configDev = merge(commonConfig, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  devtool: "cheap-module-source-map",
  output: {
    filename: "[name].js",
    path: normalize(`${ECKO_PROJECT_PATH}/dist`),
    clean: true,
  },
});

export default configDev;