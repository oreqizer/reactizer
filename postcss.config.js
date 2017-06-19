/* eslint-disable import/no-extraneous-dependencies */
const cssimport = require('postcss-import');
const cssnext = require('postcss-cssnext');


module.exports = {
  plugins: [
    cssimport({ path: 'src' }),
    cssnext(),
  ],
};
