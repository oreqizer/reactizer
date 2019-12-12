# @reactizer/webpack

The best Webpack config.

## Setup

`webpack.config.js`

```js
const reactizer = require("@reactizer/webpack");
const merge = require("webpack-merge");

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
    "webpack:dev": "webpack-dev-server --env development --inline --hot --progress --colors",
    "webpack:stats": "env NODE_ENV=production yarn webpack -- --json > stats.json",
  }
}
```

**Assumes:**
* `TypeScript`
* `@loadable`
* `.env` and `.env.example` files
* entrypoint `src/app/index.js`
* source files in the `src` folder
* build output in the `dist/static` folder

## TODO

- [ ] consider merging `--env production` and `NODE_ENV=production`

## License

MIT
