const { merge } = require("webpack-merge");

const shared = require("./parts/shared.cjs");

module.exports = () => {
  return merge(shared, {
    target: "node",
    mode: "none",
    optimization: {
      minimize: false,
    },
    devtool: "source-map",
  });
};
