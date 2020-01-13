const path = require("path");
const glob = require("glob");
const { argv } = require("yargs");

const CWD = process.cwd();

const MODULES = argv.modules ? path.join(CWD, argv.modules) : CWD;
const ROOT = path.resolve(MODULES, `node_modules/@reactizer/boil-${argv.app}`);

const update = [
  path.resolve(ROOT, ".eslintrc"),
  path.resolve(ROOT, ".gitlab-ci.yml"),
  path.resolve(ROOT, "commitlint.config.js"),
  path.resolve(ROOT, "gulpfile.js"),
  path.resolve(ROOT, "tsconfig.json"),
];

const init = [
  ...update,
  // src
  ...glob.sync(path.join(ROOT, "src/**/*.*")),
  // root
  path.resolve(ROOT, ".eslintignore"),
  path.resolve(ROOT, "index.d.ts"),
  path.resolve(ROOT, "README.md"),
];

module.exports = {
  update,
  init,
};
