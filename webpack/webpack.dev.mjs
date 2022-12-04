/**
 * Eckode/Webpack dev
 */
/**
 * Imports
 */
import { normalize } from 'path';
import { commonConfig } from './webpack.common.mjs';
const { env: { ECKO_PROJECT_PATH = process.cwd() }, } = process;
export const configDev = {
    ...commonConfig,
    mode: "development",
    devServer: {
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    devtool: 'cheap-module-source-map',
    output: {
        filename: '[name].js',
        path: normalize(`${ECKO_PROJECT_PATH}/dist`),
        clean: true,
    },
};
export default configDev;
