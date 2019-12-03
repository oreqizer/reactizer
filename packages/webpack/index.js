const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const dotenv = require("dotenv-safe");
const LoadablePlugin = require("@loadable/webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const SentryPlugin = require("@sentry/webpack-plugin");

const env = dotenv.config({
  allowEmptyValues: true,
  path: ".env",
  example: ".env.example",
});

// eslint-disable-next-line no-underscore-dangle
const __DEV__ = process.env.NODE_ENV !== "production";

const common = {
  entry: {
    app: path.resolve(process.cwd(), "src/app/index.ts"),
  },
  resolve: {
    extensions: [".js", ".mjs", ".ts", ".tsx"],
  },
  plugins: [
    new webpack.EnvironmentPlugin(env.required),
    new LoadablePlugin({
      writeToDisk: { filename: "dist" },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        include: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = mode => {
  if (mode === "production") {
    return merge(
      common,
      {
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
            minSize: 25000, // 25kb
            cacheGroups: {
              vendor: {
                test: /\/node_modules\//,
                name(module) {
                  // top-level package name
                  const {
                    groups: { scope, pkg },
                  } = module.context.match(/\/node_modules\/(?<scope>@.*?\/)?(?<pkg>.*?)(?:\/|$)/);

                  // some servers don't like @ symbols
                  return `npm.${
                    scope ? `${scope.replace("@", "").replace("/", "")}__${pkg}` : pkg
                  }`;
                },
              },
            },
          },
        },
        plugins: [
          ...common.plugins,
          new webpack.HashedModuleIdsPlugin(),
          new GenerateSW({
            importWorkboxFrom: "cdn",
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [],
          }),
          new CompressionPlugin({
            filename: "[path].br[query]",
            algorithm: "brotliCompress",
          }),
          new BundleAnalyzerPlugin({
            analyzerMode: __DEV__ ? "static" : "disabled",
          }),
          process.env.SENTRY_RELEASE &&
            new SentryPlugin({
              release: process.env.SENTRY_RELEASE,
              include: "src",
              debug: __DEV__,
              ext: ["ts", "tsx"],
            }),
        ].filter(Boolean),
      },
      { mode },
    );
  }

  return merge(
    common,
    {
      output: {
        path: path.resolve(process.cwd(), ".tmp/static"),
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
    },
    { mode },
  );
};
