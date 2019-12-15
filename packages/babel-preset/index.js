module.exports = api => {
  api.assertVersion(7);

  const isWebpack = api.caller(caller => caller && caller.name === "babel-loader");

  const env = isWebpack
    ? ["@babel/env", { modules: false, targets: { browsers: "> 0.25%, not dead" } }]
    : ["@babel/env", { targets: { node: "current" } }];

  return {
    presets: ["@babel/react", "@babel/typescript", env],
    plugins: [
      "@babel/transform-runtime",
      "@babel/syntax-dynamic-import",
      "@babel/proposal-class-properties",
      "@babel/proposal-optional-chaining",
      "@babel/proposal-nullish-coalescing-operator",
      "@loadable",
      "id",
      ["styled-components", { ssr: true }],
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".mjs", ".ts", ".tsx"],
        },
      ],
    ].filter(Boolean),
    env: {
      production: {
        plugins: ["@babel/transform-react-constant-elements"],
      },
    },
  };
};
