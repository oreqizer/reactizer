const typescript = require("./rules/typescript");

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint"],
  plugins: ["@typescript-eslint"],
  rules: typescript,
};
