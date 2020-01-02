import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  entry: "./lib/es6/src/index.bs.js",
  output: {
    filename: "bundle.[hash].js",
    chunkFilename: "[name].bundle.[chunkhash].js",
    path: resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader", options: { cacheDirectory: true } }]
      }
    ]
  },
  optimization: { splitChunks: { name: "vendor", chunks: "initial" } },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({ template: "assets/index.html" }),
  ]
};

export default config;
