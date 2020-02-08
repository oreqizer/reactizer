const path = require("path");
const webpack = require("webpack");
const { GenerateSW } = require("workbox-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const SentryPlugin = require("@sentry/webpack-plugin");

const env = require("./env");

module.exports = {
  output: {
    // Opinionated
    path: path.resolve(process.cwd(), "dist/static"),
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
    new GenerateSW({
      importWorkboxFrom: "cdn",
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [],
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
    }),
    new CompressionPlugin({
      filename: "[path].br[query]",
      algorithm: "brotliCompress",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.DEBUG ? "static" : "disabled",
    }),
    env.SENTRY_RELEASE &&
      new SentryPlugin({
        release: env.SENTRY_RELEASE,
        include: "src",
        ext: ["ts", "tsx"],
      }),
  ].filter(Boolean),
};
