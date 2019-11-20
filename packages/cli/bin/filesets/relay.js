// const path = require("path");
// const glob = require("glob");
// const fsx = require("fs-extra");
// const { argv } = require("yargs");

const base = require("./base");

// const CWD = process.cwd();

// const MODULES = argv.modules ? path.join(CWD, argv.modules) : CWD;
// const ROOT = path.resolve(MODULES, `node_modules/@reactizer/relay`);

const update = [
  // base
  ...base.update,
];

const init = [
  // base
  ...base.init,
];

module.exports = {
  update,
  init,
};
