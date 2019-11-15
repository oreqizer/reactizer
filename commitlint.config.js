const fs = require("fs");

const apps = fs.readdirSync("packages");

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["meta", ...apps]],
  },
};
