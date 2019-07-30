const path = require("path");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionPlugin = require("compression-webpack-plugin");

const common = require("./webpack.common.js");

// eslint-disable-next-line no-underscore-dangle
const __DEV__ = process.env.NODE_ENV !== "production";

module.exports = {
  ...common,
  output: {
    path: path.resolve(__dirname, "../dist/static"),
    filename: "[name].[contenthash:8].js",
    publicPath: "/",
  },
  optimization: {
    // https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 25000, // 25kb
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // top-level package name
            const pkg = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // some servers don't like @ symbols
            return `npm.${pkg.replace("@", "")}`;
          },
        },
      },
    },
  },
  plugins: [
    ...common.plugins,
    new webpack.HashedModuleIdsPlugin(),
    new CompressionPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: __DEV__ ? "static" : "disabled",
    }),
  ],
};
