import HtmlWebPackPlugin from "html-webpack-plugin"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import { resolve } from "path"
import webpack from "webpack"

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.[hash].js",
    chunkFilename: "vender.[chunkhash].js",
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader", options: { cacheDirectory: true } }],
      },
    ],
  },
  resolve: { extensions: [".js", ".ts", ".tsx"] },
  optimization: { splitChunks: { name: "vendor", chunks: "initial" } },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({ template: "assets/index.html" }),
  ],
}

export default config
