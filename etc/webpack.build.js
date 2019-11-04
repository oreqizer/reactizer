const path = require("path");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const SentryPlugin = require("@sentry/webpack-plugin");

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
          test: /\/node_modules\//,
          name(module) {
            // top-level package name
            const [, scope, pkg] = module.context.match(/\/node_modules\/(@.*?\/)?(.*?)(\/|$)/);

            // some servers don't like @ symbols
            return `npm.${scope ? `${scope.replace("@", "").replace("/", "")}__${pkg}` : pkg}`;
          },
        },
      },
    },
  },
  plugins: [
    ...common.plugins,
    new webpack.HashedModuleIdsPlugin(),
    new SentryPlugin({
      release: process.env.SOURCE_VERSION,
      include: path.resolve(__dirname, "../src/client"),
      debug: __DEV__,
      ext: ["ts", "tsx"],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: __DEV__ ? "static" : "disabled",
    }),
  ],
};
