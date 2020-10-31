const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const __DEV__ = process.env.NODE_ENV !== "production";

module.exports = {
  output: {
    filename: "[name].[contenthash:8].js",
    publicPath: "/",
  },
  optimization: {
    // https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 64000, // 64kb raw
      cacheGroups: {
        vendor: {
          test: /\/node_modules\//,
          name(module) {
            // top-level package name
            const {
              groups: { scope, pkg },
            } = module.context.match(/\/node_modules\/(?<scope>@.*?\/)?(?<pkg>.*?)(?:\/|$)/);

            // some servers don't like @ symbols
            return `npm.${scope ? `${scope.replace("@", "").replace("/", "")}__${pkg}` : pkg}`;
          },
        },
      },
    },
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
    }),
    new CompressionPlugin({
      filename: "[path].br[query]",
      algorithm: "brotliCompress",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: __DEV__ ? "static" : "disabled",
    }),
  ],
};
