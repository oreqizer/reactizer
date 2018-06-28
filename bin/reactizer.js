#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");
const R = require("ramda");

const CURR_DIR = __dirname;
const OUT_DIR = process.cwd();

const FILES = [
  // docs
  "docs/01git.md",
  "docs/02general.md",
  "docs/03structure.md",
  "docs/04rendering.md",
  "docs/05translations.md",
  "docs/06styled.md",
  "docs/07templates.md",
  // etc
  "etc/.eslintrc",
  "etc/jestGlobals.js",
  "etc/jestSetup.js",
  "etc/jestSetupFramework.js",
  "etc/webpack.build.js",
  "etc/webpack.common.js",
  "etc/webpack.dev.js",
  // src
  "src/client/.eslintrc",
  "src/server/.eslintrc",
  "src/server/app.js",
  "src/server/config.js",
  "src/server/globals.js",
  "src/server/index.js",
  "src/server/pages.js",
  "src/server/render.js",
  // types
  "types/globals.js.flow",
  "types/webpack.js.flow",
  // configs
  ".babelrc",
  ".editorconfig",
  ".eslintignore",
  ".eslintrc",
  ".flowconfig",
  ".gitlab-ci.yml",
  ".prettierrc",
  "CONTRIBUTING.md",
  "Dockerfile",
  "jest.config.js",
];

const OUT_PKG = path.join(OUT_DIR, "package.json");
if (fs.existsSync(OUT_PKG)) {
  const input = fs.readJsonSync(path.join(CURR_DIR, "..", "package.json"));
  const out = fs.readJsonSync(OUT_PKG);

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

  fs.writeJsonSync(
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

FILES.forEach(file => {
  const input = path.join(CURR_DIR, "..", file);
  const out = path.join(OUT_DIR, file);
  if (input === out) {
    return;
  }

  fs.ensureFileSync(out);

  const read$ = fs.createReadStream(input);
  const write$ = fs.createWriteStream(out);

  read$.pipe(write$);

  read$.on("error", err => {
    console.error("Failed to read file", err); // eslint-disable-line no-console
  });

  write$.on("error", err => {
    console.error("Failed to write file", err); // eslint-disable-line no-console
  });
});
