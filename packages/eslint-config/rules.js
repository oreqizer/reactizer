const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  // Possible Errors (http://eslint.org/docs/rules/#possible-errors)
  "for-direction": ERROR,
  "getter-return": ERROR,
  "no-async-promise-executor": ERROR,
  "no-compare-neg-zero": ERROR,
  "no-cond-assign": ERROR,
  "no-console": ERROR,
  "no-constant-condition": [WARN, { checkLoops: false }], // TODO why no error?
  "no-control-regex": ERROR,
  "no-debugger": ERROR,
  "no-dupe-args": ERROR,
  "no-dupe-keys": ERROR,
  "no-duplicate-case": ERROR,
  "no-empty": [WARN, { allowEmptyCatch: true }], // TODO why no error?
  "no-empty-character-class": ERROR,
  "no-ex-assign": ERROR,
  "no-extra-boolean-cast": ERROR,
  "no-func-assign": ERROR,
  "no-import-assign": ERROR,
  "no-inner-declarations": OFF, // TODO why?
  "no-invalid-regexp": ERROR,
  "no-irregular-whitespace": ERROR,
  "no-misleading-character-class": ERROR,
  "no-obj-calls": ERROR,
  "no-prototype-builtins": ERROR,
  "no-regex-spaces": ERROR,
  "no-sparse-arrays": ERROR,
  "no-template-curly-in-string": ERROR,
  "no-unreachable": ERROR,
  "no-unsafe-finally": ERROR,
  "no-unsafe-negation": ERROR,
  "require-atomic-updates": ERROR,
  "use-isnan": [ERROR, { enforceForSwitchCase: true }],
  "valid-jsdoc": OFF, // TODO why?
  "valid-typeof": OFF, // TODO why?

  // Best Practices (http://eslint.org/docs/rules/#best-practices)
  "accessor-pairs": [WARN, { setWithoutGet: true }], // TODO why no error?
  "array-callback-return": ERROR,
  "block-scoped-var": OFF, // TODO why?
  "class-methods-use-this": OFF, // TODO why?
  complexity: OFF, // TODO why? // TODO why?
  "consistent-return": [ERROR, { treatUndefinedAsUnspecified: false }],
  curly: [ERROR, "all"],
  "default-case": OFF, // TODO why?
  "default-param-last": ERROR,
  "dot-notation": ERROR,
  eqeqeq: [ERROR, "smart"],
  "guard-for-in": ERROR,
  "max-classes-per-file": OFF, // TODO why?
  "no-alert": WARN, // TODO why no error?
  "no-await-in-loop": WARN, // TODO why no error?
  "no-caller": ERROR,
  "no-case-declarations": WARN, // TODO why no error?
  "no-div-regex": WARN, // TODO why no error?
  "no-else-return": ERROR,
  "no-empty-function": OFF, // TODO why?
  "no-empty-pattern": ERROR,
  "no-eq-null": OFF, // TODO why?
  "no-eval": ERROR,
  "no-extend-native": WARN, // TODO why no error?
  "no-extra-bind": WARN, // TODO why no error?
  "no-extra-label": ERROR,
  "no-fallthrough": WARN, // TODO why no error?
  "no-global-assign": [ERROR, { exceptions: ["Map", "Set"] }],
  "no-implicit-coercion": OFF, // TODO why?
  "no-implicit-globals": OFF, // TODO why?
  "no-implied-eval": ERROR,
  "no-invalid-this": OFF, // TODO why?
  "no-iterator": ERROR,
  "no-labels": [ERROR, { allowLoop: true, allowSwitch: true }],
  "no-lone-blocks": ERROR,
  "no-loop-func": ERROR,
  "no-magic-numbers": OFF, // Annoying
  "no-multi-str": ERROR,
  "no-new-func": ERROR,
  "no-new-wrappers": WARN, // TODO why no error?
  "no-new": WARN, // TODO why no error?
  "no-octal": ERROR,
  "no-octal-escape": ERROR,
  "no-param-reassign": ERROR,
  "no-proto": ERROR,
  "no-redeclare": [WARN, { builtinGlobals: true }], // TODO why no error?
  "no-restricted-properties": OFF, // TODO why?
  "no-return-assign": WARN, // TODO why no error?
  "no-return-await": WARN, // TODO why no error?
  "no-script-url": ERROR,
  "no-self-assign": WARN, // TODO why no error?
  "no-self-compare": WARN, // TODO why no error?
  "no-sequences": WARN, // TODO why no error?
  "no-throw-literal": WARN, // TODO why no error?
  "no-unmodified-loop-condition": OFF, // TODO why?
  "no-unused-expressions": OFF, // TODO why?
  "no-unused-labels": WARN, // TODO why no error?
  "no-useless-call": WARN, // TODO why no error?
  "no-useless-catch": ERROR,
  "no-useless-concat": ERROR,
  "no-useless-escape": ERROR,
  "no-useless-return": WARN, // TODO why no error?
  "no-void": WARN, // TODO why no error?
  "no-warning-comments": OFF, // TODO why?
  "no-with": ERROR,
  "prefer-named-capture-group": ERROR,
  "prefer-promise-reject-errors": WARN, // TODO why no error?
  "prefer-regex-literals": ERROR,
  radix: ERROR,
  "require-await": ERROR,
  "require-unicode-regexp": OFF, // TODO why?
  "vars-on-top": ERROR,
  yoda: ERROR,

  // Strict Mode (http://eslint.org/docs/rules/#strict-mode)
  strict: WARN, // TODO why no error?

  // Variables (http://eslint.org/docs/rules/#variables)
  "init-declarations": OFF, // TODO why?
  "no-delete-var": ERROR,
  "no-label-var": ERROR,
  "no-restricted-globals": OFF, // TODO why?
  "no-shadow-restricted-names": ERROR,
  "no-shadow": OFF, // TODO why?
  "no-undef-init": ERROR,
  "no-undef": ERROR,
  "no-undefined": OFF, // TODO why?
  "no-unused-vars": [ERROR, { args: "after-used", ignoreRestSiblings: true }],
  "no-use-before-define": OFF, // TODO why?

  // Node.js and CommonJS (http://eslint.org/docs/rules/#nodejs-and-commonjs)
  "callback-return": OFF, // TODO why?
  "global-require": OFF, // TODO why?
  "handle-callback-err": WARN, // TODO why no error?
  "no-buffer-constructor": WARN, // TODO why no error?
  "no-mixed-requires": OFF, // TODO why?
  "no-new-require": WARN, // TODO why no error?
  "no-path-concat": WARN, // TODO why no error?
  "no-process-env": OFF, // TODO why?
  "no-process-exit": OFF, // TODO why?
  "no-restricted-modules": OFF, // TODO why?
  "no-sync": OFF, // TODO why?

  // Stylistic Issues (http://eslint.org/docs/rules/#stylistic-issues)
  camelcase: OFF, // see: babel/camelcase // TODO why?
  "capitalized-comments": OFF, // TODO why?
  "consistent-this": OFF, // TODO why?
  "func-name-matching": OFF, // TODO why?
  "func-names": OFF, // TODO why?
  "func-style": OFF, // TODO why?
  "id-blacklist": OFF, // TODO why?
  "id-length": OFF, // TODO why?
  "id-match": OFF, // TODO why?
  "line-comment-position": OFF, // TODO why?
  "lines-between-class-members": [WARN, "always", { exceptAfterSingleLine: true }], // TODO why no error?
  "max-depth": OFF, // TODO why?
  "max-lines": OFF, // TODO why?
  "max-lines-per-function": OFF, // TODO why?
  "max-nested-callbacks": OFF, // TODO why?
  "max-params": OFF, // TODO why?
  "max-statements": OFF, // TODO why?
  "max-statements-per-line": OFF, // TODO why?
  "multiline-comment-style": OFF, // TODO why?
  "new-cap": [
    WARN, // TODO why no error?
    {
      newIsCap: true,
      capIsNew: false,
    },
  ],
  "no-array-constructor": WARN, // TODO why no error?
  "no-bitwise": ERROR,
  "no-continue": OFF, // TODO why?
  "no-inline-comments": OFF, // TODO why?
  "no-lonely-if": ERROR,
  "no-multi-assign": OFF, // TODO why?
  "no-negated-condition": OFF, // TODO why?
  "no-nested-ternary": ERROR,
  "no-new-object": WARN, // TODO why no error?
  "no-plusplus": OFF, // TODO why?
  "no-restricted-syntax": OFF, // TODO why?
  "no-ternary": OFF, // TODO why?
  "no-underscore-dangle": OFF, // TODO why?
  "no-unneeded-ternary": WARN, // TODO why no error?
  "one-var": [WARN, { initialized: "never" }], // TODO why no error?
  "operator-assignment": WARN, // TODO why no error?
  "padding-line-between-statements": OFF, // TODO why?
  "prefer-object-spread": OFF, // TODO why?
  "require-jsdoc": OFF, // TODO why?
  "sort-keys": OFF, // TODO why?
  "sort-vars": OFF, // TODO why?
  "spaced-comment": ERROR,

  // ECMAScript 6 (http://eslint.org/docs/rules/#ecmascript-6)
  "constructor-super": ERROR,
  "no-class-assign": ERROR,
  "no-const-assign": ERROR,
  "no-dupe-class-members": ERROR,
  "no-duplicate-imports": OFF, // TODO why?
  "no-new-symbol": ERROR,
  "no-restricted-imports": OFF, // TODO why?
  "no-this-before-super": ERROR,
  "no-useless-computed-key": ERROR,
  "no-useless-constructor": ERROR,
  "no-var": ERROR,
  "no-useless-rename": ERROR,
  "object-shorthand": OFF, // TODO why?
  "prefer-const": [ERROR, { destructuring: "all" }],
  "prefer-destructuring": OFF, // TODO why?
  "prefer-numeric-literals": OFF, // TODO why?
  "prefer-rest-params": ERROR,
  "prefer-spread": ERROR,
  "prefer-template": ERROR,
  "require-yield": ERROR,
  "sort-imports": OFF, // TODO why?
  "symbol-description": ERROR,

  // Babel (https://github.com/babel/eslint-plugin-babel)
  "babel/camelcase": [
    ERROR,
    {
      ignoreDestructuring: false,
      properties: "never", // it's quite common to have object properties mixed
    },
  ],
  "babel/new-cap": OFF, // TODO why?
  "babel/no-invalid-this": OFF, // TODO why?
  "babel/no-unused-expressions": OFF, // TODO why?
  "babel/valid-typeof": ERROR,

  // Jest (https://github.com/jest-community/eslint-plugin-jest)
  "jest/consistent-test-it": OFF, // TODO why?
  "jest/expect-expect": OFF, // TODO why?
  "jest/lowercase-name": OFF, // TODO why?
  "jest/no-alias-methods": OFF, // TODO why?
  "jest/no-commented-out-tests": OFF, // TODO why?
  "jest/no-disabled-tests": ERROR,
  "jest/no-duplicate-hooks": ERROR,
  "jest/no-expect-resolves": OFF, // TODO why?
  "jest/no-export": ERROR,
  "jest/no-focused-tests": ERROR,
  "jest/no-hooks": OFF, // TODO why?
  "jest/no-identical-title": ERROR,
  "jest/no-if": OFF, // TODO why?
  "jest/no-jasmine-globals": ERROR,
  "jest/no-jest-import": ERROR,
  "jest/no-large-snapshots": OFF, // TODO why?
  "jest/no-mocks-import": ERROR,
  "jest/no-standalone-expect": ERROR,
  "jest/no-test-callback": OFF, // TODO why?
  "jest/no-test-prefixes": OFF, // TODO why?
  "jest/no-test-return-statement": ERROR,
  "jest/no-truthy-falsy": OFF, // TODO why?
  "jest/no-try-expect": OFF, // TODO why?
  "jest/prefer-called-with": WARN, // TODO why no error?
  "jest/prefer-expect-assertions": OFF, // TODO why?
  "jest/prefer-hooks-on-top": ERROR,
  "jest/prefer-inline-snapshots": OFF, // TODO why?
  "jest/prefer-spy-on": OFF, // TODO why?
  "jest/prefer-strict-equal": OFF, // TODO why?
  "jest/prefer-to-be-null": ERROR,
  "jest/prefer-to-be-undefined": ERROR,
  "jest/prefer-to-contain": ERROR,
  "jest/prefer-to-have-length": ERROR,
  "jest/prefer-todo": ERROR,
  "jest/require-top-level-describe": OFF, // TODO why?
  "jest/require-tothrow-message": OFF, // TODO why?
  "jest/valid-describe": ERROR,
  "jest/valid-expect": ERROR,
  "jest/valid-expect-in-promise": ERROR,
  "jest/valid-title": ERROR,

  // React (https://github.com/yannickcr/eslint-plugin-react)
  "react/boolean-prop-naming": ERROR,
  "react/button-has-type": [ERROR, { button: true, submit: true, reset: false }],
  "react/default-props-match-prop-types": ERROR,
  "react/destructuring-assignment": ERROR,
  "react/display-name": ERROR,
  "react/forbid-component-props": OFF, // TODO why?
  "react/forbid-dom-props": [
    ERROR,
    {
      forbid: [
        "class", // https://reactjs.org/docs/dom-elements.html#classname
        "for", // https://reactjs.org/docs/dom-elements.html#htmlfor
      ],
    },
  ],
  "react/forbid-elements": OFF, // TODO why?
  "react/forbid-foreign-prop-types": OFF, // TODO why?
  "react/forbid-prop-types": OFF, // TODO why?
  "react/jsx-boolean-value": OFF, // TODO why?
  "react/jsx-curly-brace-presence": OFF, // TODO why?
  "react/jsx-filename-extension": [ERROR, { extensions: [".tsx"] }],
  "react/jsx-fragments": OFF, // TODO why?
  "react/jsx-handler-names": OFF, // TODO why?
  "react/jsx-key": ERROR,
  "react/jsx-max-depth": OFF, // TODO why?
  "react/jsx-no-bind": [
    ERROR,
    {
      ignoreDOMComponents: true,
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
    },
  ],
  "react/jsx-no-comment-textnodes": ERROR,
  "react/jsx-no-duplicate-props": ERROR,
  "react/jsx-no-literals": OFF, // TODO why?
  "react/jsx-no-target-blank": OFF, // TODO why?
  "react/jsx-no-undef": ERROR,
  "react/jsx-no-useless-fragment": ERROR,
  "react/jsx-pascal-case": ERROR,
  "react/jsx-props-no-spreading": OFF, // TODO why?
  "react/jsx-sort-default-props": OFF, // TODO why?
  "react/jsx-sort-props": OFF, // TODO why?
  "react/jsx-uses-react": WARN, // TODO why no error?
  "react/jsx-uses-vars": ERROR,
  "react/no-access-state-in-setstate": ERROR,
  "react/no-array-index-key": OFF, // TODO why?
  "react/no-children-prop": OFF, // TODO why?
  "react/no-danger": OFF, // TODO why?
  "react/no-danger-with-children": ERROR,
  "react/no-deprecated": ERROR,
  "react/no-did-mount-set-state": OFF, // TODO why?
  "react/no-did-update-set-state": ERROR,
  "react/no-direct-mutation-state": ERROR,
  "react/no-find-dom-node": ERROR,
  "react/no-is-mounted": ERROR,
  "react/no-multi-comp": [ERROR, { ignoreStateless: true }],
  "react/no-redundant-should-component-update": ERROR,
  "react/no-render-return-value": ERROR,
  "react/no-set-state": OFF, // TODO why?
  "react/no-string-refs": OFF, // TODO why?
  "react/no-this-in-sfc": ERROR,
  "react/no-typos": OFF, // TODO why?
  "react/no-unescaped-entities": ERROR,
  "react/no-unknown-property": ERROR,
  "react/no-unsafe": OFF, // TODO why?
  "react/no-unused-prop-types": OFF, // TODO why?
  "react/no-unused-state": OFF, // TODO why?
  "react/no-will-update-set-state": OFF, // TODO why?
  "react/prefer-es6-class": [ERROR, "always"],
  "react/prefer-read-only-props": OFF, // TODO why?
  "react/prefer-stateless-function": OFF, // TODO why?
  "react/prop-types": OFF, // TODO why?
  "react/react-in-jsx-scope": WARN, // TODO why no error?
  "react/require-default-props": OFF, // TODO why?
  "react/require-optimization": OFF, // TODO why?
  "react/require-render-return": ERROR,
  "react/self-closing-comp": ERROR,
  "react/sort-comp": [
    ERROR,
    {
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
      order: [
        "type-annotations",
        "static-variables",
        "static-methods",
        "instance-variables",
        "lifecycle",
        "everything-else",
        "rendering",
      ],
      groups: {
        lifecycle: [
          "displayName",
          "propTypes",
          "contextTypes",
          "childContextTypes",
          "mixins",
          "statics",
          "defaultProps",
          "constructor",
          "getDefaultProps",
          "state",
          "getInitialState",
          "getChildContext",
          "getDerivedStateFromProps", // this is added
          "getDerivedStateFromError", // this is added
          "componentWillMount",
          "UNSAFE_componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "UNSAFE_componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "UNSAFE_componentWillUpdate",
          "getSnapshotBeforeUpdate",
          "componentDidUpdate",
          "componentDidCatch",
          "componentWillUnmount",
        ],
        rendering: ["/^render.+$/", "render"],
      },
    },
  ],
  "react/sort-prop-types": OFF, // TODO why?
  "react/state-in-constructor": OFF, // TODO why?
  "react/static-property-placement": OFF, // TODO why?
  "react/style-prop-object": ERROR,
  "react/void-dom-elements-no-children": ERROR,

  // React Hooks (https://www.npmjs.com/package/eslint-plugin-react-hooks)
  "react-hooks/rules-of-hooks": ERROR,
  "react-hooks/exhaustive-deps": ERROR,

  // React Accessibility (https://github.com/evcohen/eslint-plugin-jsx-a11y)
  "jsx-a11y/accessible-emoji": ERROR,
  "jsx-a11y/alt-text": ERROR,
  "jsx-a11y/anchor-has-content": OFF, // TODO why?
  "jsx-a11y/anchor-is-valid": ERROR,
  "jsx-a11y/aria-activedescendant-has-tabindex": OFF, // TODO why?
  "jsx-a11y/aria-props": ERROR,
  "jsx-a11y/aria-proptypes": ERROR,
  "jsx-a11y/aria-role": ERROR,
  "jsx-a11y/aria-unsupported-elements": ERROR,
  "jsx-a11y/click-events-have-key-events": OFF, // TODO why?
  "jsx-a11y/control-has-associated-label": OFF, // TODO why?
  "jsx-a11y/heading-has-content": OFF, // TODO why?
  "jsx-a11y/html-has-lang": ERROR,
  "jsx-a11y/iframe-has-title": ERROR,
  "jsx-a11y/img-redundant-alt": OFF, // TODO why?
  "jsx-a11y/interactive-supports-focus": ERROR,
  "jsx-a11y/label-has-associated-control": OFF, // TODO why?
  "jsx-a11y/label-has-for": OFF, // TODO why?
  "jsx-a11y/lang": ERROR,
  "jsx-a11y/media-has-caption": OFF, // TODO why?
  "jsx-a11y/mouse-events-have-key-events": OFF, // TODO why?
  "jsx-a11y/no-access-key": ERROR,
  "jsx-a11y/no-autofocus": [ERROR, { ignoreNonDOM: true }],
  "jsx-a11y/no-distracting-elements": [ERROR, { elements: ["marquee", "blink"] }],
  "jsx-a11y/no-interactive-element-to-noninteractive-role": OFF, // TODO why?
  "jsx-a11y/no-noninteractive-element-interactions": OFF, // TODO why?
  "jsx-a11y/no-noninteractive-element-to-interactive-role": OFF, // TODO why?
  "jsx-a11y/no-noninteractive-tabindex": OFF, // TODO why?
  "jsx-a11y/no-onchange": OFF, // TODO why?
  "jsx-a11y/no-redundant-roles": ERROR,
  "jsx-a11y/no-static-element-interactions": OFF, // TODO why?
  "jsx-a11y/role-has-required-aria-props": ERROR,
  "jsx-a11y/role-supports-aria-props": ERROR,
  "jsx-a11y/scope": ERROR,
  "jsx-a11y/tabindex-no-positive": ERROR,

  // import (https://github.com/benmosher/eslint-plugin-import)
  "import/default": OFF, // TODO why?
  "import/dynamic-import-chunkname": OFF, // TODO why?
  "import/export": ERROR,
  "import/exports-last": OFF, // TODO why?
  "import/extensions": [ERROR, "never", { json: "always" }],
  "import/first": ERROR,
  "import/group-exports": OFF, // TODO why?
  "import/imports-first": OFF, // TODO why?
  "import/named": OFF, // TODO why?
  "import/namespace": OFF, // TODO why?
  "import/newline-after-import": ERROR,
  "import/no-absolute-path": ERROR,
  "import/no-amd": ERROR,
  "import/no-anonymous-default-export": [
    ERROR,
    {
      allowArray: true,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowCallExpression: true,
      allowLiteral: true,
      allowObject: true,
    },
  ],
  "import/no-commonjs": OFF, // TODO why?
  "import/no-cycle": WARN, // TODO why no error?
  "import/no-default-export": OFF, // TODO why?
  "import/no-deprecated": OFF, // TODO why?
  "import/no-duplicates": ERROR,
  "import/no-dynamic-require": OFF, // TODO why?
  "import/no-extraneous-dependencies": [
    ERROR,
    {
      devDependencies: ["webpack.config.js", "etc/**", "stories/**", "**/*.spec.*"],
    },
  ],
  "import/no-internal-modules": OFF, // TODO why?
  "import/no-mutable-exports": ERROR,
  "import/no-namespace": OFF, // TODO why?
  "import/no-named-as-default": OFF, // TODO why?
  "import/no-named-as-default-member": OFF, // TODO why?
  "import/no-named-default": ERROR,
  "import/no-named-export": OFF, // TODO why?
  "import/no-nodejs-modules": OFF, // TODO why?
  "import/no-relative-parent-imports": OFF, // TODO why?
  "import/no-restricted-paths": OFF, // TODO why?
  "import/no-unassigned-import": OFF, // TODO why?
  "import/no-unresolved": ERROR,
  "import/no-useless-path-segments": ERROR,
  "import/no-webpack-loader-syntax": ERROR,
  "import/max-dependencies": OFF, // TODO why?
  "import/order": [
    ERROR,
    {
      groups: [["builtin", "external"], ["parent", "sibling"], "index"],
      "newlines-between": "always",
    },
  ],
  "import/prefer-default-export": ERROR,
  "import/no-self-import": ERROR,
  "import/no-unused-modules": ERROR,
  "import/unambiguous": OFF, // A lil too extra

  // monorepo (https://github.com/azz/eslint-plugin-monorepo)
  "monorepo/no-internal-import": ERROR,
  "monorepo/no-relative-import": ERROR,

  // Node.js (https://github.com/mysticatea/eslint-plugin-node)
  "node/exports-style": OFF, // TODO why?
  "node/file-extension-in-import": OFF, // Broken rule
  "node/no-callback-literal": ERROR,
  "node/no-deprecated-api": ERROR,
  "node/no-exports-assign": ERROR,
  "node/no-extraneous-import": OFF, // TODO why?
  "node/no-extraneous-require": OFF, // TODO why?
  "node/no-missing-import": OFF, // TODO why?
  "node/no-missing-require": ERROR,
  "node/no-unpublished-bin": ERROR,
  "node/no-unpublished-import": OFF, // TODO why?
  "node/no-unpublished-require": OFF, // TODO why?
  "node/no-unsupported-features/es-builtins": OFF, // TODO why?
  "node/no-unsupported-features/es-syntax": OFF, // TODO why?
  "node/no-unsupported-features/node-builtins": OFF, // TODO why?
  "node/prefer-global/buffer": ERROR,
  "node/prefer-global/console": ERROR,
  "node/prefer-global/process": ERROR,
  "node/prefer-global/text-decoder": OFF, // TODO why?
  "node/prefer-global/text-encoder": OFF, // TODO why?
  "node/prefer-global/url": ERROR,
  "node/prefer-global/url-search-params": OFF, // TODO why?
  "node/prefer-promises/dns": OFF, // TODO why?
  "node/prefer-promises/fs": OFF, // TODO why?
  "node/process-exit-as-throw": OFF, // TODO why?
  "node/shebang": ERROR,

  // Eslint comments (https://github.com/mysticatea/eslint-plugin-eslint-comments)
  "eslint-comments/disable-enable-pair": OFF, // TODO why?
  "eslint-comments/no-aggregating-enable": OFF, // TODO why?
  "eslint-comments/no-duplicate-disable": ERROR,
  "eslint-comments/no-restricted-disable": OFF, // TODO why?
  "eslint-comments/no-unlimited-disable": OFF, // TODO why?
  "eslint-comments/no-unused-disable": OFF, // TODO why?
  "eslint-comments/no-unused-enable": ERROR,
  "eslint-comments/no-use": OFF, // TODO why?

  // Prettier
  "prettier/prettier": [
    ERROR,
    {
      printWidth: 100, // Types make lines longer
      trailingComma: "all",
    },
  ],

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

  // TypeScript (https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
  // TODO check these
  "@typescript-eslint/adjacent-overload-signatures": ERROR,
  "@typescript-eslint/array-type": ERROR,
  "@typescript-eslint/await-thenable": OFF, // Requires type info
  "@typescript-eslint/ban-ts-ignore": WARN, // OK in rare cases
  "@typescript-eslint/ban-types": ERROR,
  "@typescript-eslint/camelcase": ERROR,
  "@typescript-eslint/class-name-casing": ERROR,
  "@typescript-eslint/consistent-type-assertions": ERROR,
  "@typescript-eslint/explicit-function-return-type": OFF, // Unbearable in components
  "@typescript-eslint/func-call-spacing": ERROR,
  "@typescript-eslint/generic-type-naming": ERROR,
  "@typescript-eslint/indent": OFF, // Prettier
  "@typescript-eslint/interface-name-prefix": ERROR,
  "@typescript-eslint/member-delimiter-style": ERROR,
  "@typescript-eslint/member-naming": ERROR,
  "@typescript-eslint/member-ordering": ERROR,
  "@typescript-eslint/no-array-constructor": ERROR,
  "@typescript-eslint/no-dynamic-delete": ERROR,
  "@typescript-eslint/no-empty-function": ERROR,
  "@typescript-eslint/no-empty-interface": ERROR,
  "@typescript-eslint/no-explicit-any": WARN, // Some 'any' are OK
  "@typescript-eslint/no-extra-parens": OFF, // Prettier
  "@typescript-eslint/no-extraneous-class": ERROR,
  "@typescript-eslint/no-floating-promises": OFF, // Requires type info
  "@typescript-eslint/no-for-in-array": OFF, // Requires type info
  "@typescript-eslint/no-inferrable-types": ERROR,
  "@typescript-eslint/no-magic-numbers": OFF, // Dupe
  "@typescript-eslint/no-misused-new": ERROR,
  "@typescript-eslint/no-misused-promises": OFF, // Requires type info
  "@typescript-eslint/no-namespace": ERROR,
  "@typescript-eslint/no-non-null-assertion": ERROR,
  "@typescript-eslint/no-parameter-properties": ERROR,
  "@typescript-eslint/no-require-imports": OFF, // Used in non-module code
  "@typescript-eslint/no-this-alias": ERROR,
  "@typescript-eslint/no-type-alias": OFF, // A perfectly legit feature
  "@typescript-eslint/no-unnecessary-condition": OFF, // Requires type info
  "@typescript-eslint/no-unnecessary-qualifier": OFF, // Requires type info
  "@typescript-eslint/no-unnecessary-type-arguments": OFF, // Requires type info
  "@typescript-eslint/no-unnecessary-type-assertion": OFF, // Requires type info
  "@typescript-eslint/no-untyped-public-signature": ERROR,
  "@typescript-eslint/no-unused-expressions": ERROR,
  "@typescript-eslint/no-unused-vars": ERROR,
  "@typescript-eslint/no-use-before-define": ERROR,
  "@typescript-eslint/no-useless-constructor": ERROR,
  "@typescript-eslint/no-var-requires": OFF, // Used in non-module code
  "@typescript-eslint/prefer-for-of": OFF, // No loops at all
  "@typescript-eslint/prefer-function-type": ERROR,
  "@typescript-eslint/prefer-includes": OFF, // Requires type info
  "@typescript-eslint/prefer-namespace-keyword": OFF, // modules > namespaces
  "@typescript-eslint/prefer-readonly": OFF, // Requires type info
  "@typescript-eslint/prefer-regexp-exec": OFF, // Requires type info
  "@typescript-eslint/prefer-string-starts-ends-with": OFF, // Requires type info
  "@typescript-eslint/promise-function-async": OFF, // Requires type info
  "@typescript-eslint/quotes": OFF, // Prettier
  "@typescript-eslint/require-array-sort-compare": OFF, // Requires type info
  "@typescript-eslint/require-await": OFF, // Requires type info
  "@typescript-eslint/restrict-plus-operands": OFF, // Requires type info
  "@typescript-eslint/restrict-template-expressions": OFF, // Requires type info
  "@typescript-eslint/semi": OFF, // Prettier,
  "@typescript-eslint/strict-boolean-expressions": OFF, // Requires type info
  "@typescript-eslint/triple-slash-reference": OFF, // Imports > triple slash
  "@typescript-eslint/type-annotation-spacing": OFF, // Prettier
  "@typescript-eslint/typedef": OFF, // Inference
  "@typescript-eslint/unbound-method": OFF, // Requires type info
  "@typescript-eslint/unified-signatures": ERROR,
};
