module.exports = (api) => {
  api.assertVersion("^7.12");

  const isWebpack = api.caller((caller) => caller && caller.name === "babel-loader");
  const prod = api.env("production");

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
      prod && "@babel/transform-react-constant-elements",
      "dev-expression",
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".mjs", ".ts", ".tsx"],
        },
      ],
    ].filter(Boolean),
  };
};
