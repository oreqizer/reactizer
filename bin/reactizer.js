#!/usr/bin/env node
/* eslint-disable no-console */

const fsx = require("fs-extra");
const path = require("path");
const R = require("ramda");
const glob = require("glob");
const chalk = require("chalk");

const CURR_DIR = __dirname;
const OUT_DIR = process.cwd();

const arg = process.argv[2];
const ARGS = {
  init: "init",
  update: "update",
};

console.log(chalk.blueBright("REACTIZER"));
if (arg && !ARGS[arg]) {
  console.log("Available commands:");
  console.log("  init");
  console.log("  update");
  process.exit(1);
}

const FILES = [
  // storybook
  ...glob.sync(path.resolve(CURR_DIR, "../storybook/**/*.*")),
  // etc
  ...glob.sync(path.resolve(CURR_DIR, "../etc/**/*.*")),
  // src
  ...glob.sync(path.resolve(CURR_DIR, "../src/server/**/*.*")),
  // types
  "types/globals.js.flow",
  // root
  ".editorconfig",
  ".eslintignore",
  ".eslintrc",
  ".gitlab-ci.yml",
  ".prettierrc",
  "babel.config.js",
  "commitlint.config.js",
  "Dockerfile",
  "jest.config.js",
  "nodemon.json",
  "Procfile",
  "tsconfig.json",
];

const copyFiles = files =>
  files.forEach(input => {
    const file = path.basename(input);
    const out = path.join(OUT_DIR, file);
    if (input === out) {
      return;
    }

    fsx.ensureFileSync(out);

    const read$ = fsx.createReadStream(input);
    const write$ = fsx.createWriteStream(out);

    read$.pipe(write$);

    read$.on("error", err => {
      console.error("Failed to read file", err); // eslint-disable-line no-console
    });

    write$.on("error", err => {
      console.error("Failed to write file", err); // eslint-disable-line no-console
    });
  });

if (arg === ARGS.init) {
  console.log("Initializing...");

  const root = glob.sync(path.join(CURR_DIR, "../{*,.*}")).filter(e => fsx.lstatSync(e).isFile());
  const app = glob.sync(path.join(CURR_DIR, "../src/app/**"));

  copyFiles([...FILES, ...root, ...app]);
}

function updatePackage() {
  const OUT_PKG = path.join(OUT_DIR, "package.json");
  const input = fsx.readJsonSync(path.join(CURR_DIR, "..", "package.json"));
  const out = fsx.readJsonSync(OUT_PKG);

  const deps = R.merge(out.dependencies, input.dependencies);
  const depsSorted = R.compose(
    R.reduce((acc, key) => R.assoc(key, deps[key], acc), {}),
    R.sortBy(R.identity),
    R.keys,
  )(deps);

  const devDeps = R.merge(out.devDependencies, input.devDependencies);
  const devDepsSorted = R.compose(
    R.reduce((acc, key) => R.assoc(key, devDeps[key], acc), {}),
    R.sortBy(R.identity),
    R.keys,
  )(devDeps);

  fsx.writeJsonSync(
    OUT_PKG,
    R.merge(out, {
      scripts: R.merge(out.scripts, input.scripts),
      dependencies: depsSorted,
      devDependencies: devDepsSorted,
    }),
    {
      spaces: 2,
    },
  );
}

if (!arg || arg === ARGS.update) {
  console.log("Updating...");

  updatePackage();
  copyFiles(FILES);
}
