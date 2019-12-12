import { Context } from "koa";

// TODO implement
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getLocale = (ctx: Context): string => {
  const localeId = "en-GB";

  return localeId;
};

// TODO implement
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getTheme = (ctx: Context): string => {
  const themeId = "main";

  return themeId;
};

// TODOs for multi-app:
// Gets the app name from context when dynamic SSRing (static render renders all apps)
// export const getApp = (ctx: Context): string => ...

// Returns the root of the given app
// export const getRoot = (app: string) => ...
