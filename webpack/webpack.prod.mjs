// production config
import { normalize } from "path";
import { commonConfig } from "./webpack.common.mjs";
const { env: { ECKO_PROJECT_PATH = process.cwd() } } = process;
export const configProd = {
    ...commonConfig,
    mode: "production",
    output: {
        filename: "js/bundle.[contenthash].min.js",
        path: normalize(`${ECKO_PROJECT_PATH}/dist`),
        publicPath: "/",
    },
    devtool: "source-map",
};
export default configProd;
