const OFF = 0;
const WARN = 1;
const ERROR = 2;

// TODO check Prettier rules if really Prettier
module.exports = {
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    // TypeScript (https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
    "@typescript-eslint/adjacent-overload-signatures": ERROR,
    "@typescript-eslint/array-type": ERROR,
    "@typescript-eslint/await-thenable": ERROR,
    "@typescript-eslint/ban-tslint-comment": ERROR,
    "@typescript-eslint/ban-ts-comment": [ERROR, { "ts-expect-error": "allow-with-description" }],
    "@typescript-eslint/ban-types": ERROR,
    "@typescript-eslint/class-literal-property-style": OFF, // Too extra
    "@typescript-eslint/consistent-indexed-object-style": ERROR,
    "@typescript-eslint/consistent-type-assertions": ERROR,
    "@typescript-eslint/consistent-type-definitions": [ERROR, "type"],
    "@typescript-eslint/consistent-type-imports": ERROR,
    "@typescript-eslint/explicit-function-return-type": OFF, // Too extra
    "@typescript-eslint/explicit-module-boundary-types": OFF, // Too extra
    "@typescript-eslint/explicit-member-accessibility": OFF, // Too extra
    "@typescript-eslint/member-delimiter-style": OFF, // Prettier
    "@typescript-eslint/member-ordering": ERROR,
    "@typescript-eslint/naming-convention": OFF, // Too extra
    "@typescript-eslint/no-base-to-string": ERROR,
    "@typescript-eslint/no-confusing-non-null-assertion": ERROR,
    "@typescript-eslint/no-dynamic-delete": ERROR,
    "@typescript-eslint/no-empty-interface": ERROR,
    "@typescript-eslint/no-empty-function": OFF, // Has use cases
    "@typescript-eslint/no-explicit-any": WARN, // Some 'any' are OK
    "@typescript-eslint/no-extra-non-null-assertion": ERROR,
    "@typescript-eslint/no-extraneous-class": ERROR,
    "@typescript-eslint/no-floating-promises": ERROR,
    "@typescript-eslint/no-for-in-array": ERROR,
    "@typescript-eslint/no-implicit-any-catch": OFF, // Too extra
    "@typescript-eslint/no-implied-eval": ERROR,
    "@typescript-eslint/no-inferrable-types": ERROR,
    "@typescript-eslint/no-invalid-void-type": ERROR,
    "@typescript-eslint/no-misused-new": ERROR,
    "@typescript-eslint/no-misused-promises": ERROR,
    "@typescript-eslint/no-namespace": ERROR,
    "@typescript-eslint/no-non-null-assertion": ERROR,
    "@typescript-eslint/no-parameter-properties": ERROR,
    "@typescript-eslint/no-require-imports": ERROR,
    "@typescript-eslint/no-this-alias": ERROR,
    "@typescript-eslint/no-throw-literal": ERROR,
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": ERROR,
    "@typescript-eslint/no-unnecessary-condition": ERROR,
    "@typescript-eslint/no-unnecessary-qualifier": ERROR,
    "@typescript-eslint/no-unnecessary-type-arguments": ERROR,
    "@typescript-eslint/no-unnecessary-type-assertion": ERROR,
    "@typescript-eslint/no-unsafe-assignment": OFF, // Too slow
    "@typescript-eslint/no-unsafe-member-access": OFF, // Too slow
    "@typescript-eslint/no-unsafe-return": OFF, // Too slow
    "@typescript-eslint/no-unused-vars": ERROR,
    "@typescript-eslint/no-var-requires": ERROR,
    "@typescript-eslint/prefer-for-of": ERROR,
    "@typescript-eslint/prefer-function-type": ERROR,
    "@typescript-eslint/prefer-includes": ERROR,
    "@typescript-eslint/prefer-literal-enum-member": ERROR,
    "@typescript-eslint/prefer-namespace-keyword": OFF, // modules > namespaces
    "@typescript-eslint/prefer-nullish-coalescing": ERROR,
    "@typescript-eslint/prefer-optional-chain": ERROR,
    "@typescript-eslint/prefer-readonly": ERROR,
    "@typescript-eslint/prefer-readonly-parameter-types": OFF, // Too extra
    "@typescript-eslint/prefer-reduce-type-parameter": ERROR,
    "@typescript-eslint/prefer-regexp-exec": ERROR,
    "@typescript-eslint/prefer-string-starts-ends-with": ERROR,
    "@typescript-eslint/prefer-ts-expect-error": ERROR,
    "@typescript-eslint/promise-function-async": OFF, // Silly
    "@typescript-eslint/require-array-sort-compare": OFF, // No sorting!
    "@typescript-eslint/restrict-plus-operands": ERROR,
    "@typescript-eslint/restrict-template-expressions": ERROR,
    "@typescript-eslint/strict-boolean-expressions": ERROR,
    "@typescript-eslint/switch-exhaustiveness-check": ERROR,
    "@typescript-eslint/triple-slash-reference": [ERROR, { types: "prefer-import" }],
    "@typescript-eslint/type-annotation-spacing": OFF, // Prettier
    "@typescript-eslint/typedef": OFF, // Inference
    "@typescript-eslint/unbound-method": ERROR,
    "@typescript-eslint/unified-signatures": ERROR,

    // Conflicting rules from official docs
    "no-duplicate-imports": OFF, // type imports
    "no-shadow": OFF, // Documented problem
    "no-unused-vars": OFF, // Dupe
    "no-use-before-define": OFF, // Documented problem

    // TODO: go through these, maybe some conflict with Prettier
    "@typescript-eslint/brace-style": OFF,
    "@typescript-eslint/comma-dangle": OFF,
    "@typescript-eslint/comma-spacing": OFF,
    "@typescript-eslint/consistent-type-exports": OFF,
    "@typescript-eslint/default-param-last": OFF,
    "@typescript-eslint/dot-notation": OFF,
    "@typescript-eslint/func-call-spacing": OFF,
    "@typescript-eslint/indent": OFF,
    "@typescript-eslint/init-declarations": OFF,
    "@typescript-eslint/keyword-spacing": OFF,
    "@typescript-eslint/lines-between-class-members": OFF,
    "@typescript-eslint/method-signature-style": OFF,
    "@typescript-eslint/no-array-constructor": OFF,
    "@typescript-eslint/no-confusing-void-expression": OFF,
    "@typescript-eslint/no-dupe-class-members": OFF,
    "@typescript-eslint/no-duplicate-imports": OFF,
    "@typescript-eslint/no-extra-parens": OFF,
    "@typescript-eslint/no-extra-semi": OFF,
    "@typescript-eslint/no-invalid-this": OFF,
    "@typescript-eslint/no-loop-func": OFF,
    "@typescript-eslint/no-loss-of-precision": OFF,
    "@typescript-eslint/no-magic-numbers": OFF,
    "@typescript-eslint/no-meaningless-void-operator": OFF,
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": OFF,
    "@typescript-eslint/no-non-null-asserted-optional-chain": OFF,
    "@typescript-eslint/no-redeclare": OFF,
    "@typescript-eslint/no-restricted-imports": OFF,
    "@typescript-eslint/no-shadow": OFF,
    "@typescript-eslint/no-type-alias": OFF,
    "@typescript-eslint/no-unnecessary-type-constraint": OFF,
    "@typescript-eslint/no-unsafe-argument": OFF,
    "@typescript-eslint/no-unsafe-call": OFF,
    "@typescript-eslint/no-unused-expressions": OFF,
    "@typescript-eslint/no-use-before-define": OFF,
    "@typescript-eslint/no-useless-constructor": OFF,
    "@typescript-eslint/non-nullable-type-assertion-style": OFF,
    "@typescript-eslint/object-curly-spacing": OFF,
    "@typescript-eslint/padding-line-between-statements": OFF,
    "@typescript-eslint/prefer-as-const": OFF,
    "@typescript-eslint/prefer-enum-initializers": OFF,
    "@typescript-eslint/prefer-return-this-type": OFF,
    "@typescript-eslint/quotes": OFF,
    "@typescript-eslint/require-await": OFF,
    "@typescript-eslint/return-await": OFF,
    "@typescript-eslint/semi": OFF,
    "@typescript-eslint/sort-type-union-intersection-members": OFF,
    "@typescript-eslint/space-before-function-paren": OFF,
    "@typescript-eslint/space-infix-ops": OFF,
  },
};
