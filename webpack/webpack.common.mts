import { normalize } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { getNodeRequire } from '@eckode/cli/src/node-env-vars.mjs';
import { EckodeWebpackConfig } from './types';

const { ECKO_PROJECT_PATH = process.cwd() } = process.env;

export const commonConfig: EckodeWebpackConfig = {
  entry: normalize(`${ECKO_PROJECT_PATH}/src/index.ts`),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mts'],
  },
  context: ECKO_PROJECT_PATH ?? process.cwd(),
  module: {
    rules: [
      {
        test: /\.(j|t|m)(s|t|j)(s|x)?$/, // .js, .jsx, .ts, .tsx, .mts, .mjs
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              configFile: false,
              presets: [getNodeRequire().resolve('@babel/preset-env'), getNodeRequire().resolve('@babel/preset-typescript')],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html.ejs' }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].css',
    }),
  ],
};

export default {
  commonConfig,
};
