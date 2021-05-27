# @reactizer/webpack

The best Webpack config.

## Setup

`webpack.config.js`

```js
const reactizer = require("@reactizer/webpack");
const { merge } = require("webpack-merge");

module.exports = merge(reactizer, {
  entry: {
    // your entrypoints
  },
  output: {
    // your output
  },
});
```

`package.json`

```json
{
  "scripts": {
    "webpack": "webpack --env production",
    "webpack:dev": "webpack serve --mode development",
    "webpack:stats": "webpack --env production --json > stats.json"
  }
}
```

**Assumes:**

- `TypeScript`
- server at `:3000`

## License

MIT
