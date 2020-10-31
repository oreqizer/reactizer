module.exports = {
  output: {
    publicPath: "/",
    filename: "[name].js",
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    proxy: {
      "*": "http://localhost:3000",
    },
    // host: "0.0.0.0", // if you want to expose it on your LAN
    inline: true,
    hot: true,
    progress: true,
    quiet: true,
  },
};
