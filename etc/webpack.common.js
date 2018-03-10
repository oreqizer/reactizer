const path = require("path");

const babelOptions = {
  presets: [
    "@babel/react",
    "@babel/flow",
    ["@babel/env", { targets: { esmodules: true } }],
    "@babel/stage-2",
  ],
  plugins: [["styled-components", { ssr: true }]],
};

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "../src/client/index.js"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
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
