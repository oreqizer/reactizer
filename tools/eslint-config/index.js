const rules = require("./rules");

module.exports = {
  extends: ["prettier", "prettier/@typescript-eslint", "prettier/babel", "prettier/react"],
  plugins: [
    "@typescript-eslint",
    "babel",
    "eslint-comments",
    "fp",
    "import",
    "jest",
    "jsx-a11y",
    "monorepo",
    "node",
    "prettier",
    "react",
    "react-hooks",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
    node: true,
  },
  globals: {
    __: true, // __("Translation");
    __DEV__: true, // transformed to 'process.env.NODE_ENV !== "production"'
    process: true, // process.env.NODE_ENV
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      "babel-module": {
        root: ["./src"],
        extensions: [".js", ".ts", ".tsx"],
      },
      node: {
        extensions: [".js", ".ts", ".tsx"],
      },
    },
  },
  rules,
};
