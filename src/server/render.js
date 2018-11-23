// @flow strict
import * as fsx from "fs-extra";
import path from "path";

import markup from "./markup";
import { routes } from "./config";
import { themes, intls } from "./data";

const OUT = path.join(__dirname, "../static/pages");

const themeIds = Object.keys(themes);
const intlIds = Object.keys(intls);

const makeStream = (themeId, intlId, route) =>
  new Promise((resolve, reject) => {
    const fileDir = path.join(OUT, themeId, intlId, route.filepath);
    fsx.ensureDirSync(fileDir);

    const htmlStream = markup(route.url, themeId, intlId);
    const fileStream = fsx.createWriteStream(path.join(fileDir, "index.html"));

    htmlStream.pipe(fileStream);

    fileStream.on("error", err => {
      reject(err);
    });

    fileStream.on("finish", () => {
      resolve();
    });
  });

const makeRoutes = (themeId, intlId) =>
  routes.reduce((routeAcc, route) => routeAcc.concat(makeStream(themeId, intlId, route)), []);

const makeIntls = themeId =>
  intlIds.reduce((intlAcc, intlId) => intlAcc.concat(makeRoutes(themeId, intlId)), []);

async function render() {
  const oks = Promise.all(
    themeIds.reduce((themeAcc, themeId) => themeAcc.concat(makeIntls(themeId)), []),
  );

  return oks.catch(err => {
    console.error("[render] Error!", err); // eslint-disable-line no-console
  });
}

render();
