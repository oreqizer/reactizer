# @reactizer/eslint-config

The best ESlint config.

## Setup

`yarn add -D eslint @reactizer/eslint-config`

For `@reactizer/eslint-config/ts`:

- `yarn add -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser`

For `@reactizer/eslint-config/jest`:

- `yarn add -D eslint-plugin-jest`

For `@reactizer/eslint-config/react`:

- `yarn add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y`

Make a `.eslintrc.js` file:

```js
module.exports = {
  extends: [
    "@reactizer",
    "@reactizer/eslint-config/react", // if using React
    "@reactizer/eslint-config/ts", // if using TypeScript
  ],
  overrides: [
    // If using Jest
    {
      files: ["*.spec.js", "*.spec.jsx"], // or .ts, .tsx
      extends: ["@reactizer/eslint-config/jest"],
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
