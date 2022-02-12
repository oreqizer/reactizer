module.exports = {
  extends: ["@reactizer"],
  env: {
    node: true
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["@reactizer/eslint-config/ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
};
