const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: production,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: production ? "[name].[contenthash:8].css" : "[name].css",
      chunkFilename: production ? "[name].[contenthash:8].css" : "[name].css",
    }),
  ],
});

module.exports = (env, argv) => {
  const production = argv.mode === "production";

  if (production) {
    return merge(common(production), prod);
  }

  return merge(common(production), dev);
};
