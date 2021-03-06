# @reactizer/webpack

The best Webpack config.

## Setup

`webpack.config.js`

```js
const reactizer = require("packages/webpack/index");
const { merge } = require("webpack-merge");

module.exports = merge(
  reactizer,
  {
    entry: {
      // your entrypoints
    },
    output: {
      path: "...",
    },
  },
);
```

`package.json`

```json
{
  "scripts": {
    "webpack": "webpack --env production",
    "webpack:dev": "webpack-dev-server --colors",
    "webpack:stats": "env NODE_ENV=production webpack --env production --json > stats.json"
  }
}
```

**Assumes:**
* `TypeScript`
* server at `:3000`

## License

MIT
