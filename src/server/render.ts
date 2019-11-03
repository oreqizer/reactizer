import * as fsx from "fs-extra";
import path from "path";
import { StaticRouterContext } from "react-router";

import markup from "./markup";
import { routes } from "./config";
import { themes, intls } from "./data";

const OUT = path.join(__dirname, "../static/pages");

const themeIds = Object.keys(themes);
const intlIds = Object.keys(intls);

const makeStream = (themeId: string, localeId: string, url: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const fileDir = path.join(OUT, themeId, localeId, url);
    fsx.ensureDirSync(fileDir);

    const context: StaticRouterContext = {};
    const htmlStream = markup({ url, context, themeId, localeId });
    if (!htmlStream) {
      reject(new Error(`Invalid pre-render URL: ${context.url}`));
      return;
    }

    const fileStream = fsx.createWriteStream(path.join(fileDir, "index.html"));

    fileStream.write("<!DOCTYPE html>");
    htmlStream.pipe(fileStream);

    fileStream.on("error", err => {
      reject(err);
    });

    fileStream.on("finish", () => {
      resolve();
    });
  });

const makeRoutes = (themeId: string, intlId: string): Promise<void>[] =>
  // @ts-ignore - dunno what is its problem
  routes.reduce((routeAcc, route) => routeAcc.concat(makeStream(themeId, intlId, route)), []);

const makeIntls = (themeId: string): Promise<void>[] =>
  // @ts-ignore - dunno what is its problem
  intlIds.reduce((intlAcc, intlId) => intlAcc.concat(makeRoutes(themeId, intlId)), []);

async function render() {
  const oks = Promise.all(
    // @ts-ignore - dunno what is its problem
    themeIds.reduce((themeAcc, themeId) => themeAcc.concat(makeIntls(themeId)), []),
  );

  return oks.catch(err => {
    console.error("[render] Error!", err); // eslint-disable-line no-console
  });
}

render();
