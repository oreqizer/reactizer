#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");
const R = require("ramda");

const CURR_DIR = __dirname;
const OUT_DIR = process.cwd();

const FILES = [
  // docs
  "01git.md",
  "02general.md",
  "03structure.md",
  "04rendering.md",
  "05translations.md",
  "06styled.md",
  "07templates.md",
  // etc
  "etc/.eslintrc",
  "etc/jestGlobals.js",
  "etc/jestSetup.js",
  "etc/jestSetupFramework.js",
  "etc/webpack.build.js",
  "etc/webpack.common.js",
  "etc/webpack.dev.js",
  // src
  "client/app.jsx",
  "client/index.jsx",
  "server/markup/Html.jsx",
  "server/markup/index.jsx",
  "server/.eslintrc",
  "server/app.js",
  "server/config.js",
  "server/globals.js",
  "server/index.js",
  "server/pages.js",
  "server/render.js",
  // types
  "types/globals.js.flow",
  "types/webpack.js.flow",
  // configs
  ".babelrc",
  ".editorconfig",
  ".eslintignore",
  ".eslintrc",
  ".flowconfig",
  ".gitignore",
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

  read$.on("error", () => {
    throw new Error("Failed to read file"); // eslint-disable-line fp/no-throw
  });

  write$.on("error", () => {
    throw new Error("Failed to write file"); // eslint-disable-line fp/no-throw
  });
});
