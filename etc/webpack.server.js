const path = require('path');
const ExtractText = require('extract-text-webpack-plugin');

const shared = require('./webpack.shared');


module.exports = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: {
    bundle: path.resolve(__dirname, '../src/server/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  externals: /^[a-z\-/0-9]+$/,
  resolve: shared.resolve,
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
    }, shared.cssShared],
  },
  plugins: [
    new ExtractText({ filename: 'index.css', allChunks: true }),
  ],
};
