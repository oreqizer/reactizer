const path = require("path");

const babelOptions = {
  presets: ["react", ["es2015", { modules: false, loose: true }], "stage-2"],
  plugins: [["babel-plugin-styled-components", { ssr: true, preprocess: true }]],
};

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "../src/client/index.js"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      client: path.resolve(__dirname, "../src/client"),
    },
  },
  jsClient: {
    test: /\.jsx?$/,
    use: [
      {
        loader: "babel-loader",
        options: babelOptions,
      },
    ],
  },
};
