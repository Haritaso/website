import webpack from "webpack"
import merge from "webpack-merge"
import common from "./webpack.common"

const config: webpack.Configuration = merge(common, {
  mode: "production",
  stats: "errors-only",
})

export default config
