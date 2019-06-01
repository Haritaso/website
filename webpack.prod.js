/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* eslint-enable import/no-extraneous-dependencies */
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({ cache: true, parallel: true, extractComments: true })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css',
      chunkFilename: '[id].css'
    })
  ],
  stats: 'errors-only'
});
