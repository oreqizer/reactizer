const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv-safe");
const LoadablePlugin = require("@loadable/webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");

const env = dotenv.config({
  allowEmptyValues: true,
  path: path.resolve(__dirname, "../.env"),
  example: path.resolve(__dirname, "../.env.example"),
});

module.exports = {
  entry: {
    app: path.resolve(__dirname, "../src/app/index.ts"),
  },
  resolve: {
    extensions: [".js", ".mjs", ".ts", ".tsx"],
  },
  plugins: [
    new webpack.EnvironmentPlugin(env.required),
    new CompressionPlugin({
      filename: "[path].br[query]",
      algorithm: "brotliCompress",
    }),
    new GenerateSW({
      importWorkboxFrom: "cdn",
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [],
    }),
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
        test: /\.mjs$/,
        type: "javascript/auto",
        include: /node_modules/,
      },
    ],
  },
};
