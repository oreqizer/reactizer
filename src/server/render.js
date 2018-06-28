// @flow strict
import fs from "fs-extra";
import path from "path";

import "./globals"; // Must be 1st
import markup from "./markup";
import { routes } from "./config";
import { themes, intls } from "./data";

const OUT = path.join(__dirname, "../static/pages");

const themeIds = Object.keys(themes);
const intlIds = Object.keys(intls);

function render() {
  themeIds.forEach(themeId => {
    intlIds.forEach(intlId => {
      routes.forEach(route => {
        const fileDir = path.join(OUT, themeId, intlId, route.filepath);
        fs.ensureDirSync(fileDir);

        const htmlStream = markup(route.url, themeId, intlId);
        const fileStream = fs.createWriteStream(path.join(fileDir, "index.html"));

        htmlStream.pipe(fileStream);

        fileStream.on("error", err => {
          console.error("[render] Error!", err); // eslint-disable-line no-console
        });
      });
    });
  });
}

render();
