const { merge } = require("webpack-merge");

const prod = require("./parts/prod");
const dev = require("./parts/dev");

const common = (mode) => ({
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx", ".json"],
  },
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
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: mode.production,
            },
          },
        ],
      },
    ],
  },
});

module.exports = (mode) => {
  if (mode.production) {
    return merge(common(mode), prod, { mode });
  }

  return merge(common(mode), dev, { mode });
};
