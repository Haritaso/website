const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const WebpackBar = require('webpackbar');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  mode: 'production',
  output: { filename: '[name].[hash].js', path: path.join(__dirname, 'dist') },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: true } }],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [{ loader: 'eslint-loader' }],
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : { loader: MiniCssExtractPlugin.loader, options: { reloadAll: true } },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: { ident: 'postcss', plugins: () => postcssPresetEnv({ autoprefixer: { grid: true } }) } },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // これ変えたらdevServer死ぬ
      template: 'assets/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
    new WebpackBar(),
  ],
  devServer: {
    port: 3000,
    stats: 'errors-only',
  },
};
