const path = require("path");

const common = require("./webpack.common.js");

module.exports = {
  ...common,
  output: {
    path: path.resolve(__dirname, "../.tmp/static"),
    publicPath: "/",
    filename: "[name].js",
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: ".tmp/static/",
    proxy: {
      "*": "http://localhost:3000",
    },
    // host: "0.0.0.0", // if you want to expose it on your LAN
    open: true,
  },
};
