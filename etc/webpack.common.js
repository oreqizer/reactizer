const path = require("path");

const babelOptions = {
  presets: [
    "@babel/react",
    "@babel/flow",
    ["@babel/env", { modules: false, targets: { browsers: "last 2 versions" } }],
  ],
  plugins: [
    "@babel/transform-runtime",
    "@babel/proposal-class-properties",
    "id",
    ["styled-components", { ssr: true }],
    "ramda",
    "react-hot-loader/babel",
  ],
};

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "../src/client/index.js"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      client: path.resolve(__dirname, "../src/client"),
      server: path.resolve(__dirname, "../src/server"),
    },
  },
  loaderJs: {
    test: /\.jsx?$/,
    use: [
      {
        loader: "babel-loader",
        options: babelOptions,
      },
    ],
    exclude: /node_modules/,
  },
};
