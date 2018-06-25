const fs = require("fs");
const path = require("path");

const CURR_DIR = __dirname;
const OUT_DIR = process.cwd();

const [, , ...args] = process.argv; // eslint-disable-line fp/no-rest-parameters

const FILES = [
  // docs
  // ... TODO
  // etc
  "etc/.eslintrc",
  "etc/jestGlobals.js",
  "etc/jestSetup.js",
  "etc/jestSetupFramework.js",
  "etc/webpack.build.jd",
  "etc/webpack.common.jd",
  "etc/webpack.dev.jd",
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

const files = args.length > 0 ? args.split(" ") : FILES;

files.forEach(file => {
  const read$ = fs.createReadStream(path.join(CURR_DIR, file));
  const write$ = fs.createWriteStream(path.join(OUT_DIR, file));

  read$.pipe(write$);

  write$.on("error", () => {
    throw new Error("Failed to write file"); // eslint-disable-line fp/no-throw
  });
});
