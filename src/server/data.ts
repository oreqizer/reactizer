import path from "path";
import fsx from "fs-extra";

import { IntlRaw } from "client/records/Intl";
import { makeTheme, Theme } from "client/styles/theme";

const LOCALES = path.join(__dirname, "../../static/locales");
const THEMES = path.join(__dirname, "../../static/themes");

const loadIntls = () =>
  fsx
    .readdirSync(LOCALES)
    .map(file => ({
      locale: file.replace(".json", ""),
      translations: fsx.readJsonSync(path.join(LOCALES, file)),
    }))
    .reduce(
      (acc, locale) => ({
        ...acc,
        [locale.locale]: locale,
      }),
      {},
    );

export const intls: { [key: string]: IntlRaw } = loadIntls();

const loadThemes = () =>
  fsx
    .readdirSync(THEMES)
    .map(file => ({
      id: file.replace(".json", ""),
      theme: makeTheme(fsx.readJsonSync(path.join(THEMES, file))),
    }))
    .reduce(
      (acc, theme) => ({
        ...acc,
        [theme.id]: theme.theme,
      }),
      {},
    );

export const themes: { [key: string]: Theme } = loadThemes();
