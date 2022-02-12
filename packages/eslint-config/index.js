const OFF = 0;
const WARN = 1;
const ERROR = 2;

// TODO check Prettier rules if really Prettier
module.exports = {
  extends: ["prettier"],
  plugins: [
    "babel",
    "eslint-comments",
    "fp",
    "import",
    "node",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    es6: true,
  },
  globals: {
    __DEV__: true, // Transformed to 'process.env.NODE_ENV !== "production"'
  },
  rules: {
    // Possible Errors (http://eslint.org/docs/rules/#possible-errors)
    "for-direction": ERROR,
    "getter-return": ERROR,
    "no-async-promise-executor": ERROR,
    "no-await-in-loop": ERROR,
    "no-compare-neg-zero": ERROR,
    "no-cond-assign": ERROR,
    "no-console": ERROR,
    "no-constant-condition": ERROR,
    "no-control-regex": ERROR,
    "no-debugger": ERROR,
    "no-dupe-args": ERROR,
    "no-dupe-else-if": ERROR,
    "no-dupe-keys": ERROR,
    "no-duplicate-case": ERROR,
    "no-empty": [ERROR, { allowEmptyCatch: true }], // Expected errors don't need catch
    "no-empty-character-class": ERROR,
    "no-ex-assign": ERROR,
    "no-extra-boolean-cast": ERROR,
    "no-extra-parens": OFF, // Prettier
    "no-extra-semi": OFF, // Prettier
    "no-func-assign": ERROR,
    "no-import-assign": ERROR,
    "no-inner-declarations": ERROR,
    "no-invalid-regexp": ERROR,
    "no-irregular-whitespace": ERROR,
    "no-loss-of-precision": ERROR,
    "no-misleading-character-class": ERROR,
    "no-obj-calls": ERROR,
    "no-promise-executor-return": ERROR,
    "no-prototype-builtins": ERROR,
    "no-regex-spaces": ERROR,
    "no-setter-return": ERROR,
    "no-sparse-arrays": ERROR,
    "no-template-curly-in-string": ERROR,
    "no-unexpected-multiline": OFF, // Prettier
    "no-unreachable": ERROR,
    "no-unreachable-loop": ERROR,
    "no-unsafe-finally": ERROR,
    "no-unsafe-negation": ERROR,
    "no-useless-backreference": ERROR,
    "require-atomic-updates": ERROR,
    "use-isnan": ERROR,
    "valid-typeof": ERROR,

    // Best Practices (http://eslint.org/docs/rules/#best-practices)
    "accessor-pairs": ERROR,
    "array-callback-return": ERROR,
    "block-scoped-var": ERROR,
    "class-methods-use-this": ERROR,
    complexity: OFF, // Too extra
    "consistent-return": ERROR,
    curly: ERROR,
    "default-case": ERROR,
    "default-case-last": ERROR,
    "default-param-last": ERROR,
    "dot-location": OFF, // Prettier
    "dot-notation": ERROR,
    eqeqeq: ERROR,
    "grouped-accessor-pairs": ERROR,
    "guard-for-in": ERROR,
    "max-classes-per-file": ERROR,
    "no-alert": ERROR,
    "no-caller": ERROR,
    "no-case-declarations": ERROR,
    "no-constructor-return": ERROR,
    "no-div-regex": ERROR,
    "no-else-return": ERROR,
    "no-empty-function": OFF, // Sentinel functions in default contexts
    "no-empty-pattern": ERROR,
    "no-eq-null": ERROR,
    "no-eval": ERROR,
    "no-extend-native": ERROR,
    "no-extra-bind": ERROR,
    "no-extra-label": ERROR,
    "no-fallthrough": ERROR,
    "no-floating-decimal": OFF, // Prettier
    "no-global-assign": ERROR,
    "no-implicit-coercion": ERROR,
    "no-implicit-globals": ERROR,
    "no-implied-eval": ERROR,
    "no-invalid-this": OFF, // See babel/no-invalid-this
    "no-iterator": ERROR,
    "no-labels": ERROR,
    "no-lone-blocks": ERROR,
    "no-loop-func": ERROR,
    "no-magic-numbers": OFF, // Just too annoying to enforce
    "no-multi-spaces": OFF, // Prettier
    "no-multi-str": ERROR,
    "no-new": ERROR,
    "no-new-func": ERROR,
    "no-new-wrappers": ERROR,
    "no-octal": ERROR,
    "no-octal-escape": ERROR,
    "no-param-reassign": ERROR,
    "no-proto": ERROR,
    "no-redeclare": ERROR,
    "no-restricted-properties": OFF, // None come to mind
    "no-return-assign": ERROR,
    "no-return-await": ERROR,
    "no-script-url": ERROR,
    "no-self-assign": ERROR,
    "no-self-compare": ERROR,
    "no-sequences": ERROR,
    "no-throw-literal": ERROR,
    "no-unmodified-loop-condition": ERROR,
    "no-unused-expressions": ERROR,
    "no-unused-labels": ERROR,
    "no-useless-call": ERROR,
    "no-useless-catch": ERROR,
    "no-useless-concat": ERROR,
    "no-useless-escape": ERROR,
    "no-useless-return": ERROR,
    "no-void": ERROR,
    "no-warning-comments": WARN, // Enough to be annoying
    "no-with": ERROR,
    "prefer-named-capture-group": WARN, // Maybe error later, people don't know about this yet
    "prefer-promise-reject-errors": ERROR,
    "prefer-regex-literals": ERROR,
    radix: ERROR,
    "require-await": ERROR,
    "require-unicode-regexp": OFF, // Nah
    "vars-on-top": ERROR,
    "wrap-iife": OFF, // Prettier
    yoda: ERROR,

    // Strict Mode (http://eslint.org/docs/rules/#strict-mode)
    strict: WARN, // Enough

    // Variables (http://eslint.org/docs/rules/#variables)
    "init-declarations": ERROR,
    "no-delete-var": ERROR,
    "no-label-var": ERROR,
    "no-restricted-globals": ERROR,
    "no-shadow-restricted-names": ERROR,
    "no-shadow": ERROR,
    "no-undef-init": ERROR,
    "no-undef": ERROR,
    "no-undefined": ERROR,
    "no-unused-vars": ERROR,
    "no-use-before-define": ERROR,

    // Stylistic Issues (http://eslint.org/docs/rules/#stylistic-issues)
    // Some are skipped if taken care of by Prettier
    camelcase: OFF, // See babel/camelcase
    "capitalized-comments": OFF, // Too subjective
    "consistent-this": OFF, // Obsolete
    "func-name-matching": OFF, // Obsolete
    "func-names": ERROR,
    "func-style": [ERROR, "declaration", { allowArrowFunctions: true }],
    "id-denylist": OFF, // Not needed
    "id-length": OFF, // Too extra
    "id-match": OFF, // Not needed
    "lines-between-class-members": [ERROR, "always", { exceptAfterSingleLine: true }],
    "max-depth": OFF, // Too extra
    "max-lines": OFF, // Too extra
    "max-lines-per-function": OFF, // Too extra
    "max-nested-callbacks": OFF, // Obsolete
    "max-params": OFF, // Too extra
    "max-statements": OFF, // Too extra
    "max-statements-per-line": ERROR,
    "multiline-comment-style": [ERROR, "separate-lines"],
    "new-cap": ERROR,
    "no-array-constructor": ERROR,
    "no-bitwise": ERROR,
    "no-continue": ERROR,
    "no-inline-comments": OFF, // They make sense
    "no-lonely-if": ERROR,
    "no-multi-assign": ERROR,
    "no-negated-condition": ERROR,
    "no-nested-ternary": ERROR,
    "no-new-object": ERROR,
    "no-plusplus": ERROR,
    "no-restricted-syntax": OFF, // Not needed
    "no-ternary": OFF, // Ternaries are good
    "no-underscore-dangle": [ERROR, { allow: ["__DEV__"] }],
    "no-unneeded-ternary": ERROR,
    "one-var": [ERROR, "never"],
    "operator-assignment": ERROR,
    "padding-line-between-statements": OFF, // Too subjective
    "prefer-object-spread": ERROR,
    "require-jsdoc": OFF, // Obsolete
    "sort-keys": OFF, // Too extra
    "sort-vars": OFF, // Too extra
    "spaced-comment": ERROR,

    // ECMAScript 6 (http://eslint.org/docs/rules/#ecmascript-6)
    "constructor-super": ERROR,
    "no-class-assign": ERROR,
    "no-const-assign": ERROR,
    "no-dupe-class-members": ERROR,
    "no-duplicate-imports": ERROR,
    "no-new-symbol": ERROR,
    "no-restricted-imports": OFF, // None yet
    "no-this-before-super": ERROR,
    "no-useless-computed-key": ERROR,
    "no-useless-constructor": ERROR,
    "no-var": ERROR,
    "no-useless-rename": ERROR,
    "object-shorthand": ERROR,
    "prefer-const": [ERROR, { destructuring: "all" }],
    "prefer-destructuring": ERROR,
    "prefer-numeric-literals": ERROR,
    "prefer-rest-params": ERROR,
    "prefer-spread": ERROR,
    "prefer-template": ERROR,
    "require-yield": ERROR,
    "sort-imports": OFF, // Too extra
    "symbol-description": ERROR,

    // Babel (https://github.com/babel/eslint-plugin-babel)
    "babel/camelcase": ERROR,
    "babel/new-cap": ERROR,
    "babel/no-invalid-this": ERROR,
    "babel/no-unused-expressions": ERROR,
    "babel/valid-typeof": ERROR,

    // import (https://github.com/benmosher/eslint-plugin-import)
    "import/default": OFF, // Too extra
    "import/dynamic-import-chunkname": OFF, // Not needed
    "import/export": ERROR,
    "import/exports-last": OFF, // Too extra
    "import/extensions": [ERROR, "never", { json: "always" }],
    "import/first": ERROR,
    "import/group-exports": OFF, // Too extra
    "import/named": ERROR,
    "import/namespace": ERROR,
    "import/newline-after-import": ERROR,
    "import/no-absolute-path": ERROR,
    "import/no-amd": ERROR,
    "import/no-anonymous-default-export": ERROR,
    "import/no-commonjs": OFF, // Legacy
    "import/no-cycle": OFF, // A very slow rule, use 'madge' instead
    "import/no-default-export": OFF, // Silly
    "import/no-deprecated": OFF, // Too slow
    "import/no-duplicates": ERROR,
    "import/no-dynamic-require": ERROR,
    "import/no-extraneous-dependencies": [
      ERROR,
      {
        devDependencies: ["gulpfile.js", "webpack.config.js", "etc/**", "stories/**", "**/*.spec.*"],
      },
    ],
    "import/no-internal-modules": OFF, // Silly
    "import/no-mutable-exports": ERROR,
    "import/no-namespace": OFF, // Too extra
    "import/no-named-as-default": ERROR,
    "import/no-named-as-default-member": ERROR,
    "import/no-named-default": ERROR,
    "import/no-named-export": OFF, // Silly
    "import/no-nodejs-modules": OFF, // Silly
    "import/no-relative-parent-imports": OFF, // Too extra
    "import/no-restricted-paths": OFF, // Not needed
    "import/no-unassigned-import": OFF, // Silly
    "import/no-unresolved": ERROR,
    "import/no-useless-path-segments": OFF, // Too slow
    "import/no-webpack-loader-syntax": ERROR,
    "import/max-dependencies": OFF, // Too extra
    "import/order": [
      ERROR,
      {
        groups: [["builtin", "external"], ["parent", "sibling"], "index"],
        "newlines-between": "always",
      },
    ],
    "import/prefer-default-export": OFF, // Silly
    "import/no-self-import": ERROR,
    "import/no-unused-modules": ERROR,
    "import/unambiguous": OFF, // Too extra

    // Node.js (https://github.com/mysticatea/eslint-plugin-node)
    "node/exports-style": OFF, // ES6
    "node/file-extension-in-import": OFF, // Broken rule
    "node/handle-callback-err": OFF, // Too extra
    "node/no-callback-literal": ERROR,
    "node/no-deprecated-api": ERROR,
    "node/no-exports-assign": ERROR,
    "node/no-extraneous-import": OFF, // Handled by 'import'
    "node/no-extraneous-require": OFF, // Handled by 'import'
    "node/no-missing-import": OFF, // Handled by 'import'
    "node/no-missing-require": ERROR,
    "node/no-unpublished-bin": ERROR,
    "node/no-unpublished-import": OFF, // Handled by 'import
    "node/no-unpublished-require": OFF, // Handled by 'import
    "node/no-unsupported-features/es-builtins": OFF, // Babel
    "node/no-unsupported-features/es-syntax": OFF, // Babel
    "node/no-unsupported-features/node-builtins": OFF, // Babel
    "node/prefer-global/buffer": ERROR,
    "node/prefer-global/console": ERROR,
    "node/prefer-global/process": ERROR,
    "node/prefer-global/text-decoder": ERROR,
    "node/prefer-global/text-encoder": ERROR,
    "node/prefer-global/url": ERROR,
    "node/prefer-global/url-search-params": ERROR,
    "node/prefer-promises/dns": ERROR,
    "node/prefer-promises/fs": ERROR,
    "node/process-exit-as-throw": ERROR,
    "node/shebang": ERROR,

    // Eslint comments (https://github.com/mysticatea/eslint-plugin-eslint-comments)
    "eslint-comments/disable-enable-pair": [ERROR, { allowWholeFile: true }],
    "eslint-comments/no-aggregating-enable": ERROR,
    "eslint-comments/no-duplicate-disable": ERROR,
    "eslint-comments/no-restricted-disable": OFF, // Not yet needed
    "eslint-comments/no-unlimited-disable": OFF, // Not yet needed
    "eslint-comments/no-unused-disable": ERROR,
    "eslint-comments/no-unused-enable": ERROR,
    "eslint-comments/no-use": OFF, // Silly

    // FP (https://github.com/jfmengels/eslint-plugin-fp)
    "fp/no-arguments": ERROR,
    "fp/no-class": ERROR,
    "fp/no-delete": ERROR,
    "fp/no-events": ERROR,
    "fp/no-get-set": ERROR,
    "fp/no-let": ERROR,
    "fp/no-loops": ERROR,
    "fp/no-mutating-assign": ERROR,
    "fp/no-mutating-methods": ERROR,
    "fp/no-mutation": [
      ERROR,
      {
        commonjs: true,
        exceptions: [{ property: "defaultProps" }, { property: "displayName" }],
      },
    ],
    "fp/no-nil": OFF, // Nulls are legit
    "fp/no-proxy": ERROR,
    "fp/no-rest-parameters": ERROR,
    "fp/no-this": ERROR,
    "fp/no-throw": ERROR,
    "fp/no-unused-expression": OFF, // 'fs' calls, tests
    "fp/no-valueof-field": ERROR,

    // TODO go through these:
    "arrow-body-style": OFF,
    "eslint-comments/require-description": OFF,
    "import/no-import-module-exports": OFF,
    "import/no-relative-packages": OFF,
    "line-comment-position": OFF,
    "no-nonoctal-decimal-escape": OFF,
    "no-restricted-exports": OFF,
    "no-unsafe-optional-chaining": OFF,
    "no-unused-private-class-members": OFF,
    "node/callback-return": OFF,
    "node/global-require": OFF,
    "node/no-mixed-requires": OFF,
    "node/no-new-require": OFF,
    "node/no-path-concat": OFF,
    "node/no-process-env": OFF,
    "node/no-process-exit": OFF,
    "node/no-restricted-import": OFF,
    "node/no-restricted-require": OFF,
    "node/no-sync": OFF,
    "prefer-arrow-callback": OFF,
    "prefer-exponentiation-operator": OFF,
    "prefer-object-has-own": OFF,
  },
};
