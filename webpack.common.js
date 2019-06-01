const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: './src/index.js',
  output: { filename: 'bundle.[hash].js', path: path.join(__dirname, 'dist') },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: true } }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [{ loader: 'eslint-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'assets/index.html'
    }),
    new WebpackBar({
      profile: true,
      reporter: 'profile'
    })
  ]
};
