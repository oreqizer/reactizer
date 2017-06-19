const path = require('path');
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');

const shared = require('./webpack.shared.js');


module.exports = {
  entry: shared.entry,
  output: {
    path: path.resolve(__dirname, '../.tmp/static'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: shared.resolve,
  module: {
    rules: [shared.jsClient, shared.cssShared],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.SourceMapDevToolPlugin({
      exclude: /vendor/,
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev'),
    }),
    new ExtractText({ disable: true }),
  ],
  devServer: {
    contentBase: '.tmp/static/',
    proxy: {
      '*': 'http://localhost:3000',
    },
  },
};
