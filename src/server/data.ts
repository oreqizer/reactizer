import { IntlRaw } from "client/records/Intl";
import { makeTheme, Theme } from "client/styles/theme";
import themeFiles from "../../static/themes";
import localeFiles from "../../static/locales";

const loadIntls = () =>
  Object.keys(localeFiles)
    .map(locale => ({
      locale,
      translations: localeFiles[locale],
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
  Object.keys(themeFiles)
    .map(theme => ({
      id: theme,
      theme: makeTheme(themeFiles[theme]),
    }))
    .reduce(
      (acc, theme) => ({
        ...acc,
        [theme.id]: theme.theme,
      }),
      {},
    );

export const themes: { [key: string]: Theme } = loadThemes();
