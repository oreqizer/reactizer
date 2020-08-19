# @reactizer/webpack

The best Webpack config.

## Setup

`webpack.config.js`

```js
const reactizer = require("@reactizer/webpack");
const { merge } = require("webpack-merge");

module.exports = merge(
  reactizer,
  { 
     // Your custom stuff
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
* `@loadable`
* `DEBUG` env var for bundle visualization

## License

MIT
