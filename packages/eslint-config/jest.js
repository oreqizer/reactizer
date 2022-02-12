const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  plugins: ["jest"],
  env: {
    jest: true,
  },
  settings: {
    jest: {
      version: "detect",
    },
  },
  rules: {
    // Jest (https://github.com/jest-community/eslint-plugin-jest)
    "jest/consistent-test-it": [ERROR, { fn: "test" }],
    "jest/expect-expect": OFF, // Too extra
    "jest/max-nested-describe": ERROR,
    "jest/no-alias-methods": ERROR,
    "jest/no-commented-out-tests": WARN, // Not that bad for an error
    "jest/no-conditional-expect": ERROR,
    "jest/no-deprecated-functions": ERROR,
    "jest/no-disabled-tests": ERROR,
    "jest/no-done-callback": ERROR,
    "jest/no-duplicate-hooks": ERROR,
    "jest/no-export": ERROR,
    "jest/no-focused-tests": ERROR,
    "jest/no-hooks": OFF, // OK in some cases
    "jest/no-identical-title": ERROR,
    "jest/no-if": ERROR,
    "jest/no-interpolation-in-snapshots": ERROR,
    "jest/no-jasmine-globals": ERROR,
    "jest/no-jest-import": ERROR,
    "jest/no-large-snapshots": ERROR,
    "jest/no-mocks-import": ERROR,
    "jest/no-restricted-matchers": ERROR,
    "jest/no-standalone-expect": ERROR,
    "jest/no-test-prefixes": ERROR,
    "jest/no-test-return-statement": ERROR,
    "jest/prefer-called-with": ERROR,
    "jest/prefer-comparison-matcher": ERROR,
    "jest/prefer-equality-matcher": ERROR,
    "jest/prefer-expect-assertions": ERROR,
    "jest/prefer-expect-resolves": ERROR,
    "jest/prefer-hooks-on-top": ERROR,
    "jest/prefer-lowercase-title": ERROR,
    "jest/prefer-spy-on": WARN, // Nice-to-have, but not critical
    "jest/prefer-strict-equal": ERROR,
    "jest/prefer-to-be": ERROR,
    "jest/prefer-to-contain": ERROR,
    "jest/prefer-to-have-length": ERROR,
    "jest/prefer-todo": ERROR,
    "jest/require-hook": ERROR,
    "jest/require-to-throw-message": ERROR,
    "jest/require-top-level-describe": ERROR,
    "jest/unbound-method": ERROR,
    "jest/valid-describe-callback": ERROR,
    "jest/valid-expect": ERROR,
    "jest/valid-expect-in-promise": ERROR,
    "jest/valid-title": ERROR,
  },
};
