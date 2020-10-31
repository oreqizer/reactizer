# @reactizer/eslint-config

The best ESlint config.

## Setup

`.eslintrc.js`

```js
module.exports = {
  extends: ["@reactizer"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["@reactizer/eslint-config/ts"],
      parserOptions: {
        project: "./tsconfig.eslint.json",
      },
    },
  ],
};
```

## Development

Benchmark:
* `TIMING=1 eslint ...`

Checking `prettier` conflicts:
* `eslint --print-config index.js | eslint-config-prettier-check`

## License

MIT
