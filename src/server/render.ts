import * as fsx from "fs-extra";
import path from "path";

import markup from "./markup";
import { routes } from "./config";
import { themes, intls } from "./data";

const OUT = path.join(__dirname, "../static/pages");

const themeIds = Object.keys(themes);
const intlIds = Object.keys(intls);

const makeStream = (themeId: string, intlId: string, route: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const fileDir = path.join(OUT, themeId, intlId, route);
    fsx.ensureDirSync(fileDir);

    const htmlStream = markup(route, themeId, intlId);
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
