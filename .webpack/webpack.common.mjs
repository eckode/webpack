// shared config (dev and prod)
import { normalize } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { getNodeRequire } from '../cli/node-local-variables.mjs';

const { ECKO_PATH, ECKO_PROJECT_PATH = process.cwd() } = process.env;

/**
 * require.resolve()
 *
 * @param {string} mod Module to resolve
 */
const nodeRequireResolve = (mod) => getNodeRequire().resolve(mod);

export const commonConfig = {
  entry: normalize(`${ECKO_PROJECT_PATH}/src/index.ts`),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  context: ECKO_PATH ?? process.cwd(),
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              configFile: false,
              presets: [nodeRequireResolve('@babel/preset-env'), nodeRequireResolve('@babel/preset-typescript')],
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
