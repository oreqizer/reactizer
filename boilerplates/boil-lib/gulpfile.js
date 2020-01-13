/* eslint-disable fp/no-mutation */
const gulp = require("gulp");
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");

const targets = { browsers: "> 0.25%, not dead" };

const plugins = [
  "@babel/plugin-transform-runtime",
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-optional-chaining",
  "@babel/plugin-proposal-nullish-coalescing-operator",
];

const buildLib = () =>
  gulp
    .src("src/**/*.{ts,tsx}", { base: "src" })
    .pipe(plumber())
    .pipe(
      babel({
        presets: ["@babel/react", "@babel/typescript", ["@babel/env", { loose: true, targets }]],
        plugins,
      }),
    )
    .pipe(gulp.dest("lib"));

const buildEs = () =>
  gulp
    .src("src/**/*.{ts,tsx}", { base: "src" })
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
      rename(file => ({
        ...file,
        extname: ".mjs",
      })),
    )
    .pipe(gulp.dest("lib"));

const typesFlow = () =>
  gulp
    .src("src/**/*.js.flow", { base: "src" })
    .pipe(plumber())
    .pipe(gulp.dest("lib"));

const build = gulp.parallel([buildLib, buildEs, typesFlow]);

module.exports = {
  build,
};
