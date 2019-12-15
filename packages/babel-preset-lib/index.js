const targets = { browsers: "> 0.25%, not dead" };

module.exports = api => {
  api.assertVersion(7);

  return {
    presets: ["@babel/react", "@babel/typescript", ["@babel/env", { loose: true, targets }]],
    plugins: [
      "@babel/transform-runtime",
      "@babel/proposal-class-properties",
      "@babel/proposal-optional-chaining",
      "@babel/proposal-nullish-coalescing-operator",
      "@babel/transform-react-constant-elements",
    ],
    env: {
      modules: {
        presets: [["@babel/env", { loose: true, targets, modules: false }]],
      },
    },
  };
};
