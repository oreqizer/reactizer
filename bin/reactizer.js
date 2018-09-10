#!/usr/bin/env node

// @noflow
const fs = require("fs-extra");
const path = require("path");
const R = require("ramda");

const CURR_DIR = __dirname;
const OUT_DIR = process.cwd();

const FILES = [
  // storybook
  ".storybook/.eslintrc",
  ".storybook/addons.js",
  ".storybook/config.js",
  ".storybook/preview-head.html",
  ".storybook/webpack.config.js",
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
  "etc/jestSetup.js",
  "etc/jestSetupFramework.js",
  "etc/webpack.build.js",
  "etc/webpack.common.js",
  "etc/webpack.dev.js",
  // src
  "src/client/.eslintrc",
  "src/server/markup/index.jsx",
  "src/server/.eslintrc",
  "src/server/config.js",
  "src/server/render.js",
  // types
  "types/globals.js.flow",
  "types/webpack.js.flow",
  // root
  ".babelrc",
  ".editorconfig",
  ".eslintignore",
  ".eslintrc",
  ".flowconfig",
  ".gitlab-ci.yml",
  ".prettierrc",
  "Dockerfile",
  "jest.config.js",
];

const FILES_INIT = [
  // src
  "src/client/components/Text/index.jsx",
  "src/client/components/Text/__tests__/index.spec.jsx",
  "src/client/records/Intl.js",
  "src/client/records/Theme.js",
  "src/client/scenes/Root.jsx",
  "src/client/scenes/__tests__/Root.spec.jsx",
  "src/client/services/intl/context.js",
  "src/client/services/theme/context.js",
  "src/client/app.jsx",
  "src/client/index.js",
  "src/server/markup/Html.jsx",
  "src/server/app.js",
  "src/server/data.js",
  "src/server/index.js",
  "src/server/pages.js",
  "src/static/favicon/android-chrome-192x192.png",
  "src/static/favicon/android-chrome-384x384.png",
  "src/static/favicon/favicon.ico",
  "src/static/favicon/favicon-16x16.png",
  "src/static/favicon/favicon-32x32.png",
  "src/static/manifest.json",
  // stories
  "stories/Text.stories.jsx",
  // root
  "CONTRIBUTING.md",
];

function updatePackage() {
  const OUT_PKG = path.join(OUT_DIR, "package.json");
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

updatePackage();

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

FILES_INIT.forEach(file => {
  const input = path.join(CURR_DIR, "..", file);
  const out = path.join(OUT_DIR, file);
  if (input === out) {
    return;
  }

  // Init only
  if (fs.existsSync(out)) {
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
