const path = require("path");
const Assets = require("assets-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = {
  entry: common.entry,
  output: {
    path: path.resolve(__dirname, "../dist/static"),
    filename: "[name].[hash].js",
    publicPath: "/",
  },
  resolve: common.resolve,
  module: {
    rules: [common.loaderJs],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        commons: {
          test: /\/node_modules\//,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new Assets({
      path: "dist",
      filename: "assets.json",
      prettyPrint: true,
    }),
  ],
};
