/* eslint-disable fp/no-unused-expression, @typescript-eslint/ban-ts-ignore */
import * as fsx from "fs-extra";
import path from "path";
import { StaticRouterContext } from "react-router";

import markup from "./markup";
import { routes } from "./config";
import { themes, locales } from "./data";

const OUT = path.join(__dirname, "../static/pages");

const themeIds = Object.keys(themes);
const intlIds = Object.keys(locales);

const makeStream = (themeId: string, localeId: string, url: string): Promise<void> => {
  const fileDir = path.join(OUT, themeId, localeId, url);
  fsx.ensureDirSync(fileDir);

  const context: StaticRouterContext = {};
  const html = markup({ url, context, themeId, localeId });
  if (!html) {
    return Promise.reject(new Error(`Invalid pre-render URL: ${context.url}`));
  }

  return fsx.writeFile(path.join(fileDir, "index.html"), `<!DOCTYPE html>${html}`);
};

const makeRoutes = (themeId: string, intlId: string): Promise<void>[] =>
  // @ts-ignore - dunno what is its problem
  routes.reduce((routeAcc, route) => routeAcc.concat(makeStream(themeId, intlId, route)), []);

const makeIntls = (themeId: string): Promise<void>[] =>
  // @ts-ignore - dunno what is its problem
  intlIds.reduce((intlAcc, intlId) => intlAcc.concat(makeRoutes(themeId, intlId)), []);

function render() {
  const oks = Promise.all(
    // @ts-ignore - dunno what is its problem
    themeIds.reduce((themeAcc, themeId) => themeAcc.concat(makeIntls(themeId)), []),
  );

  return oks.catch(err => {
    console.error("[render] Error!", err); // eslint-disable-line no-console
  });
}

render();
