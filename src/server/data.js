// @flow strict
import { themeDefault } from "client/records/Theme";
import { intlDefault } from "client/records/Intl";

export const themes = {
  main: themeDefault,
  alt: { name: "Crimsonizer", colors: { primary: "crimson" } },
};

export const intls = {
  en: intlDefault,
  de: { locale: "de", translations: { "Do you even lift?": "Hast thou even hoist?" } },
};
