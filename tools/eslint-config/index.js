const rules = require("./rules");

module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["prettier", "prettier/babel", "prettier/react", "plugin:prettier/recommended"],
  plugins: [
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
    __DEV__: true, // Transformed to 'process.env.NODE_ENV !== "production"'
    process: true, // Process.env.NODE_ENV
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      "babel-module": {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules,
};
