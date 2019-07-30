const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv-safe");
const LoadablePlugin = require("@loadable/webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");

const env = dotenv.config({
  path: path.resolve(__dirname, "../.env"),
  example: path.resolve(__dirname, "../.env.example"),
});

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/client/index.ts"),
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  plugins: [
    new webpack.EnvironmentPlugin(env.required),
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
