import webpack from "webpack"
import merge from "webpack-merge"
import common from "./webpack.common"

const config: webpack.Configuration = merge(common, {
  mode: "development",
  devServer: { port: 3000, stats: "errors-only", historyApiFallback: true },
})

export default config
