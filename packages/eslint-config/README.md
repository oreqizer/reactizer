# @reactizer/eslint-config

The best ESlint config.

## Setup

`yarn add eslint @babel/core @reactizer/eslint-config`

Also install `typescript` if using **TypeScript**.

Make a `.eslintrc.js` file:

```js
module.exports = {
  extends: ["@reactizer"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["@reactizer/eslint-config/ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
};
```

Add to `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

## Prettier

`yarn add prettier`

Prettier rules to avoid conflicts are included, however, `prettier` itself is not.

Install `yarn add prettier -D` separately, create `prettier.config.js` and add the
following scripts to `package.json`:

```json
{
  "scripts": {
    "prettier": "prettier --check . || (echo \"oops 🙀 pls run 'yarn fmt'\" && exit 1)",
    "fmt": "prettier --write ."
  }
}
```

## Development

Benchmark:

- `TIMING=1 eslint ...`

Checking `prettier` conflicts:

- `eslint --print-config index.js | eslint-config-prettier-check`

## License

MIT
