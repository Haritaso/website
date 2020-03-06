import HtmlWebPackPlugin from "html-webpack-plugin"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
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
        use: [
          { loader: "babel-loader", options: { cacheDirectory: true } },
          { loader: "linaria/loader" },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  optimization: { splitChunks: { name: "vendor", chunks: "initial" } },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({ template: "assets/index.html" }),
    new MiniCssExtractPlugin({
      filename: "styles-[contenthash].css",
    }),
  ],
}

export default config
