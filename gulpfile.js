/* eslint-disable import/no-extraneous-dependencies */
const gulp = require("gulp");

const statics = () => gulp.src("src/static/**").pipe(gulp.dest("dist/static"));

const build = gulp.parallel(statics);

module.exports = {
  default: build,
};
