#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");

const CURR_DIR = __dirname;
const OUT_DIR = process.cwd();

const FILES = [
  // docs
  // ... TODO
  // etc
  "etc/.eslintrc",
  "etc/jestGlobals.js",
  "etc/jestSetup.js",
  "etc/jestSetupFramework.js",
  "etc/webpack.build.js",
  "etc/webpack.common.js",
  "etc/webpack.dev.js",
  // src
  // ... TODO
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
