const path = require("path");

const common = require("./webpack.common.js");

module.exports = {
  entry: common.entry,
  output: {
    path: path.resolve(__dirname, "../.tmp/static"),
    publicPath: "/",
    filename: "[name].js",
  },
  resolve: common.resolve,
  module: {
    rules: [common.loaderJs],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: ".tmp/static/",
    proxy: {
      "*": "http://localhost:3000",
    },
    open: true,
  },
};
