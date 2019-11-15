const fs = require("fs");

const apps = fs.readdirSync("src");

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [2, "always", "sentence-case"],
    "scope-enum": [2, "always", ["meta", ...apps]],
  },
};
