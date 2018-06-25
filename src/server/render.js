// @flow strict
import fs from "fs-extra";
import path from "path";

import "./globals"; // Must be 1st
import markup from "./markup";
import { routes } from "./config";

const OUT = path.join(__dirname, "../static/pages");

const themeIds = ["main", "alt"];
const localeIds = ["en", "de"];

function render() {
  themeIds.forEach(themeId => {
    localeIds.forEach(localeId => {
      routes.forEach(route => {
        const fileDir = path.join(OUT, themeId, localeId, route.filepath);
        fs.ensureDirSync(fileDir);

        const htmlStream = markup(route.url, themeId, localeId);
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
