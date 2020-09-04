const fs = require("fs");

const packages = fs.readdirSync("packages");
const tools = fs.readdirSync("tools");

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["meta", ...packages, ...tools]],
  },
};
