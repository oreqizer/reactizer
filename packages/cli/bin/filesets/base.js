const path = require("path");
const glob = require("glob");
const fsx = require("fs-extra");
const { argv } = require("yargs");

const CWD = process.cwd();

const MODULES = argv.modules ? path.join(CWD, argv.modules) : CWD;
const ROOT = path.resolve(MODULES, `node_modules/@reactizer/boil-${argv.app}`);

const update = [
  // storybook
  ...glob.sync(path.resolve(ROOT, ".storybook/**/*.{*,.*}")),
  // etc
  ...glob.sync(path.resolve(ROOT, "etc/**/*.{*,.*}")),
  // server
  ...glob.sync(path.resolve(ROOT, "src/_server/**/*.*")),
  // root
  path.resolve(ROOT, ".editorconfig"),
  path.resolve(ROOT, ".gitlab-ci.yml"),
  path.resolve(ROOT, ".prettierrc"),
  path.resolve(ROOT, "commitlint.config.js"),
  path.resolve(ROOT, "Dockerfile"),
  path.resolve(ROOT, "nodemon.json"),
  path.resolve(ROOT, "Procfile"),
];

const init = [
  ...update,
  // public
  ...glob.sync(path.resolve(ROOT, "public/**/*.*")),
  // src
  ...glob.sync(path.join(ROOT, "src/**/*.*")),
  // types
  ...glob.sync(path.join(ROOT, "types/**/*.*")),
  // root
  ...glob
    .sync(path.join(ROOT, "{*,.*}"))
    // Don't overwrite package.json, .env, and .reactizerignore
    .filter(
      e =>
        fsx.lstatSync(e).isFile() && !e.endsWith("package.json") && !e.endsWith(".reactizerignore"),
    ),
];

module.exports = {
  update,
  init,
};
