const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prod = require("./parts/prod.cjs");
const dev = require("./parts/dev.cjs");
const shared = require("./parts/shared.cjs");

const common = (production) =>
  merge(shared, {
    module: {
      rules: [
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
