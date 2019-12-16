import path from "path";
import fsx from "fs-extra";

const LOCALES = path.join(__dirname, "../static/locales");
const LOCALE_MAP = path.join(__dirname, "../static/generated/locales/map.json");

const THEMES = path.join(__dirname, "../static/themes");
const THEME_MAP = path.join(__dirname, "../static/generated/themes/map.json");

const loadIntls = () =>
  fsx
    .readdirSync(LOCALES)
    .map(file => fsx.readJsonSync(path.join(LOCALES, file)))
    .reduce(
      (acc, locale) => ({
        ...acc,
        [locale.id]: locale,
      }),
      {},
    );

export const locales: { [key: string]: unknown } = loadIntls();
export const localeMap: { [key: string]: string } = fsx.readJSONSync(LOCALE_MAP);

const loadThemes = () =>
  fsx
    .readdirSync(THEMES)
    .map(file => ({
      id: file.replace(".json", ""),
      theme: fsx.readJsonSync(path.join(THEMES, file)),
    }))
    .reduce(
      (acc, theme) => ({
        ...acc,
        [theme.id]: theme.theme,
      }),
      {},
    );

export const themes: { [key: string]: unknown } = loadThemes();
export const themeMap: { [key: string]: string } = fsx.readJSONSync(THEME_MAP);
