module.exports = (api) => {
  api.cache(true);

  const targets = { browsers: "> 0.25%, not dead" };
  const modules = process.env.BABEL_ENV === "modules" ? false : "auto";

  return {
    presets: [
      "@babel/react",
      "@babel/typescript",
      ["@babel/env", { loose: true, targets, modules }],
    ],
    plugins: [
      "@babel/plugin-transform-runtime",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-transform-react-constant-elements",
    ],
  };
};
