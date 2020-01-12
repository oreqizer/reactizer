const cfg = require("../webpack.config");

const config = cfg();

module.exports = {
  resolve: config.resolve,
  module: config.module,
};
