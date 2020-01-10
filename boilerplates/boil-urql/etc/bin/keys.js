const path = require("path");
const fsx = require("fs-extra");
const x = require("i18n-extract");

const OUT = path.join(__dirname, "../../src/static/locales/");

const keys = x.extractFromFiles(
  [path.join(__dirname, "../../src/**/*.tsx"), path.join(__dirname, "../../src/**/*.ts")],
  {
    marker: "__",
    babelOptions: {
      configFile: false,
      ast: true,
      parserOpts: {
        sourceType: "module",
        plugins: [
          "typescript",
          "jsx",
          "asyncFunctions",
          "classConstructorCall",
          "doExpressions",
          "trailingFunctionCommas",
          "objectRestSpread",
          "decoratorsLegacy",
          "classProperties",
          "exportExtensions",
          "exponentiationOperator",
          "asyncGenerators",
          "functionBind",
          "functionSent",
          "dynamicImport",
          "optionalChaining",
        ],
      },
    },
  },
);

const processed = keys.reduce(
  (acc, obj) => ({
    ...acc,
    [obj.key]: obj.key,
  }),
  {},
);

const locales = fsx.readdirSync(OUT);
locales.forEach(locale => {
  const file = path.join(OUT, locale);
  const existing = fsx.readJsonSync(file);

  // eslint-disable-next-line fp/no-mutating-methods
  const res = Object.keys(processed)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: existing.translations[key] || processed[key],
      }),
      {},
    );

  fsx.outputJsonSync(
    file,
    { ...existing, translations: res },
    {
      spaces: 2,
    },
  );
});
