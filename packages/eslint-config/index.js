const rules = require("./rules");

module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["plugin:prettier/recommended", "prettier/react"],
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
