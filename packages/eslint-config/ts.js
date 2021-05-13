const typescript = require("./rules/typescript");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: typescript,
};
