import { Context } from "koa";
import { Palette, Theme, makeTheme } from "@reactizer/theme";
import { Locale } from "@reactizer/intl";

type Input = {
  id: string;
  data: { [key: string]: unknown };
};

// TODO implement
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getLocaleId = (ctx: Context): string => {
  const localeId = "en-GB";

  return localeId;
};

// TODO implement
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getLocale = ({ id, data }: Input): Locale => {
  return data[id] as Locale;
};

// TODO implement
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getThemeId = (ctx: Context): string => {
  const themeId = "main";

  return themeId;
};

// TODO implement
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getTheme = ({ id, data }: Input): Theme => {
  return makeTheme(data[id] as Palette);
};

// TODOs for multi-app:
// Gets the app name from context when dynamic SSRing (static render renders all apps)
// export const getApp = (ctx: Context): string => ...

// Returns the root of the given app
// export const getRoot = (app: string) => ...
