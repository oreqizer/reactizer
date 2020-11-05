module.exports = {
  output: {
    publicPath: "/",
  },
  devtool: "cheap-module-source-map",
  devServer: {
    proxy: {
      "*": "http://localhost:3000",
    },
    inline: true,
    hot: true,
    progress: true,
  },
};
