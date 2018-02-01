const path = require("path");
const webpack = require("webpack");

const config = require("./config.js");

module.exports = {
  entry: config.entry,
  output: {
    path: path.resolve(__dirname, "../.tmp/static"),
    publicPath: "/",
    filename: "[name].js",
  },
  resolve: config.resolve,
  module: {
    rules: [config.js],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.SourceMapDevToolPlugin({
      exclude: /vendor/,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("dev"),
    }),
  ],
  devServer: {
    contentBase: ".tmp/static/",
    proxy: {
      "*": "http://localhost:3000",
    },
  },
};
