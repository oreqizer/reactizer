module.exports = {
  presets: [
    "@babel/typescript",
    "@babel/react",
    [
      "@babel/env",
      {
        targets: "> 0.25%, not dead",
      },
    ],
  ],
};
