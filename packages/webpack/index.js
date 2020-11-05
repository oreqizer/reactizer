const { merge } = require("webpack-merge");

const prod = require("./parts/prod");
const dev = require("./parts/dev");

const common = (production) => ({
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
              sourceMap: production,
            },
          },
        ],
      },
    ],
  },
});

module.exports = (env, argv) => {
  const production = argv.mode === "production";

  if (production) {
    return merge(common(production), prod);
  }

  return merge(common(production), dev);
};
