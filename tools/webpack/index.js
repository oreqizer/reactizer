const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const LoadablePlugin = require("@loadable/webpack-plugin");

const env = require("./parts/env");
const prod = require("./parts/prod");
const dev = require("./parts/dev");

const common = mode => ({
  entry: {
    // Opinionated
    app: path.resolve(process.cwd(), "src/app/index.ts"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js"],
  },
  plugins: [
    new webpack.EnvironmentPlugin(env),
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
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: mode !== "production",
            },
          },
        ],
      },
    ],
  },
});

module.exports = mode => {
  if (mode === "production") {
    return merge(common(mode), prod, { mode });
  }

  return merge(common(mode), dev, { mode });
};
