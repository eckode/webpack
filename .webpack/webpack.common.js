// shared config (dev and prod)
const { resolve, normalize } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {ECKO_PATH, ECKO_PROJECT_PATH} = process.env;

const common = {
  entry: normalize(`${ECKO_PROJECT_PATH}/src/index.ts`),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  context: ECKO_PATH,
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
              presets: [
                require.resolve( "@babel/preset-env" ),
                require.resolve( "@babel/preset-typescript" ),
              ],
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html.ejs" }),
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[name].css",
    }),
  ],
};

module.exports = {
  common
};