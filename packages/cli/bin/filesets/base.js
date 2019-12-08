const path = require("path");
const glob = require("glob");
const fsx = require("fs-extra");
const { argv } = require("yargs");

const CWD = process.cwd();

const MODULES = argv.modules ? path.join(CWD, argv.modules) : CWD;
const ROOT = path.resolve(MODULES, `node_modules/@reactizer/${argv.app}`);

const update = [
  // storybook
  ...glob.sync(path.resolve(ROOT, ".storybook/**/*.{*,.*}")),
  // etc
  ...glob.sync(path.resolve(ROOT, "etc/**/*.{*,.*}")),
  // src
  ...glob.sync(path.resolve(ROOT, "src/_server/**/*.*")),
  // types
  path.resolve(ROOT, "types/globals.d.ts"),
  // root
  path.resolve(ROOT, ".editorconfig"),
  path.resolve(ROOT, ".gitlab-ci.yml"),
  path.resolve(ROOT, ".prettierrc"),
  path.resolve(ROOT, "commitlint.config.js"),
  path.resolve(ROOT, "Dockerfile"),
  path.resolve(ROOT, "jest.config.js"),
  path.resolve(ROOT, "nodemon.json"),
  path.resolve(ROOT, "Procfile"),
  path.resolve(ROOT, "tsconfig.json"),
];

const init = [
  ...update,
  // public
  ...glob.sync(path.resolve(ROOT, "public/**/*.*")),
  // app
  ...glob.sync(path.join(ROOT, "src/app/**/*.*")),
  // root
  ...glob
    .sync(path.join(ROOT, "{*,.*}"))
    // Don't overwrite 'package.json'
    .filter(e => fsx.lstatSync(e).isFile() && !e.endsWith("package.json")),
];

module.exports = {
  update,
  init,
};
