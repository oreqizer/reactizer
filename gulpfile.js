/* eslint-disable fp/no-mutation */
const gulp = require("gulp");
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const ts = require("gulp-typescript");
const filter = require("gulp-filter");

const libs = gulp.src(["packages/*/src/**/*.{ts,tsx}"], { base: __dirname });

const targets = { browsers: "> 0.25%, not dead" };

const plugins = [
  // TODO add to deps
  "@babel/plugin-transform-runtime",
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-optional-chaining",
  "@babel/plugin-proposal-nullish-coalescing-operator",
  "@babel/plugin-transform-react-constant-elements",
  "styled-components",
];

const buildLib = () =>
  libs
    .pipe(plumber())
    .pipe(
      babel({
        presets: ["@babel/react", "@babel/typescript", ["@babel/env", { loose: true, targets }]],
        plugins,
      }),
    )
    .pipe(
      rename((file) => ({
        ...file,
        dirname: file.dirname.replace("/src", "/lib"),
      })),
    )
    .pipe(gulp.dest(__dirname));

const buildEs = () =>
  libs
    .pipe(plumber())
    .pipe(
      babel({
        presets: [
          "@babel/react",
          "@babel/typescript",
          ["@babel/env", { loose: true, targets, modules: false }],
        ],
        plugins,
      }),
    )
    .pipe(
      rename((file) => ({
        ...file,
        dirname: file.dirname.replace("/src", "/lib"),
        extname: ".mjs",
      })),
    )
    .pipe(gulp.dest(__dirname));

const tsProject = ts.createProject("tsconfig.json");

const types = () =>
  libs
    .pipe(plumber())
    .pipe(tsProject())
    .pipe(filter(["**/*.d.ts"]))
    .pipe(
      rename((file) => ({
        ...file,
        dirname: file.dirname.replace("/src", "/lib"),
      })),
    )
    .pipe(gulp.dest(__dirname));

const build = gulp.parallel([buildLib, buildEs, types]);

module.exports = {
  build,
};
