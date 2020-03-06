import webpack from "webpack"
import merge from "webpack-merge"
import TerserPlugin from "terser-webpack-plugin"
import WorkBoxWebpackPlugin from "workbox-webpack-plugin"
import { resolve } from "path"
import common from "./webpack.common"
import WebpackPwaManifest from "webpack-pwa-manifest"

const iconSize = [96, 128, 192, 512]

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
      swDest: resolve(__dirname, "dist/sw.js"),
      clientsClaim: true,
      skipWaiting: true,
    }),
    /* eslint-disable @typescript-eslint/camelcase */
    new WebpackPwaManifest({
      icons: iconSize.map(size => ({
        src: `https://s.gravatar.com/avatar/b74290f5f1d0dd9dde8511c3a5b57955?s=${size}.jpeg`,
        size: `${size}x${size}`,
      })),
      inject: true,
      display: "standalone",
      background_color: "#04080d",
      theme_color: "#04080d",
      start_url: "https://haritaso.me",
      description: "website",
      short_name: "website",
      name: "haritaso's website",
    }),
    /* eslint-ensable @typescript-eslint/camelcase */
  ],
})

export default config
