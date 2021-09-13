module.exports = {
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
    ],
  },
};
