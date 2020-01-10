const webpack = require("webpack");
const reactizer = require("@reactizer/webpack");
const merge = require("webpack-merge");

module.exports = mode => {
  if (mode === "production") {
    return merge(reactizer(mode), {
      // Needed for fetching data during SSR
      // @loadable just converts `import()` to `require()`, not static `import`
      // https://github.com/gregberge/loadable-components/issues/480
      plugins: [new webpack.NormalModuleReplacementPlugin(/.*\/RoutesSync.tsx$/, "./Routes.tsx")],
    });
  }

  return reactizer(mode);
};
