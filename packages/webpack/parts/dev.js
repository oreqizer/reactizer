module.exports = {
  output: {
    publicPath: "/",
  },
  devtool: "cheap-module-source-map",
  devServer: {
    inline: true,
    hot: true,
    progress: true,
  },
};
