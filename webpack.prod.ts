import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common";

const config: webpack.Configuration = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        extractComments: true,
        terserOptions: {
          ecma: 8,
          safari10: true
        }
      })
    ]
  },
  stats: "errors-only"
});

export default config;
