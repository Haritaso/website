import webpack from "webpack"
import merge from "webpack-merge"
import TerserPlugin from "terser-webpack-plugin"
import WorkBoxWebpackPlugin from "workbox-webpack-plugin"
import { resolve } from "path"
import common from "./webpack.common"

const config: webpack.Configuration = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({ cache: true, parallel: true, extractComments: true }),
    ],
  },
  stats: "errors-only",
  plugins: [
    new WorkBoxWebpackPlugin.GenerateSW({
      globDirectory: resolve(__dirname, "dist"),
      globPatterns: ["*.{html,js,css}"],
      swDest: resolve(__dirname, "dist/sw.js"),
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
})

export default config
