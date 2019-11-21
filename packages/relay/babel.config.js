module.exports = api => {
  const isWebpack = api.caller(caller => caller && caller.name === "babel-loader");

  const env = isWebpack
    ? ["@babel/env", { modules: false, targets: { browsers: "last 2 versions" } }]
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
      ["relay", { artifactDirectory: "src/__generated__" }],
      ["styled-components", { ssr: true }],
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".mjs", ".ts", ".tsx"],
        },
      ]
    ].filter(Boolean),
    env: {
      production: {
        plugins: ["@babel/transform-react-constant-elements"],
      },
    },
  };
};
