const path = require('path');
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const Assets = require('assets-webpack-plugin');

const shared = require('./webpack.shared.js');


const production = process.env.NODE_ENV === 'production';


const plugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: production,
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'dev'),
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
  }),
  new ExtractText({ filename: '[name].[hash].css', allChunks: true }),
  new Assets({
    path: 'dist',
    filename: 'assets.json',
    prettyPrint: !production,
  }),
];

if (production) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    comments: false,
    negate_iife: false,  // <- for `v8LazyParse()`
    comparisons: true,
    conditionals: true,
    dead_code: true,
    evaluate: true,
    if_return: true,
    join_vars: true,
    pure_getters: true,
    unsafe: true,
    unsafe_comps: true,
    unused: true,
  }));
}


module.exports = {
  entry: shared.entry,
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    filename: '[name].[hash].js',
  },
  resolve: shared.resolve,
  module: {
    rules: [shared.jsClient, shared.cssShared],
  },
  plugins,
};
