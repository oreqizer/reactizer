const path = require("path");
const webpack = require("webpack");
const I18nPlugin = require("i18n-webpack-plugin");

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
  plugins: [
    new I18nPlugin(null),
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],
  devServer: {
    contentBase: ".tmp/static/",
    proxy: {
      "*": "http://localhost:3000",
    },
  },
};
