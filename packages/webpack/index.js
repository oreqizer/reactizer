const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const dotenv = require("dotenv-safe");
const LoadablePlugin = require("@loadable/webpack-plugin");

const prod = require("./parts/prod");
const dev = require("./parts/dev");

// eslint-disable-next-line no-underscore-dangle
const __DEV__ = process.env.NODE_ENV !== "production";

const env = dotenv.config({
  allowEmptyValues: true,
  path: ".env",
  example: ".env.example",
});

const common = {
  entry: {
    // Opinionated
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
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: __DEV__,
            },
          },
        ],
      },
    ],
  },
};

module.exports = mode => {
  if (mode === "production") {
    return merge(common, prod, { mode });
  }

  return merge(common, dev, { mode });
};
