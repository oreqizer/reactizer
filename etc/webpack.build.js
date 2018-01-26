const path = require("path");
const webpack = require("webpack");
const Assets = require("assets-webpack-plugin");

const config = require("./config.js");

const plugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
  }),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("production"),
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    minChunks: ({ resource }) => /node_modules/.test(resource),
  }),
  new Assets({
    path: "dist",
    filename: "assets.json",
    prettyPrint: true,
  }),
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    negate_iife: false, // <- for `v8LazyParse()`
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
  }),
];

module.exports = {
  entry: config.entry,
  output: {
    path: path.resolve(__dirname, "../dist/static"),
    filename: "[name].[hash].js",
  },
  resolve: config.resolve,
  module: {
    rules: [config.js],
  },
  plugins,
};
