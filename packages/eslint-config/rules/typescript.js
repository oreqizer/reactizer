const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  // TypeScript (https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
  "@typescript-eslint/adjacent-overload-signatures": ERROR,
  "@typescript-eslint/array-type": ERROR,
  "@typescript-eslint/await-thenable": ERROR,
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
  "require-await": OFF, // Promise-returning fns are 'async' just to prevent throws
};
