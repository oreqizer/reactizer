/* @flow */
import fs from "fs";
import path from "path";

import "./globals"; // Must be 1st
import markup from "./markup/index";
import { routes } from "./config";

const out = path.join(__dirname, "../static/pages");

const locales = ["en", "de"];
const themes = ["main", "alt"];

function render() {
  fs.mkdirSync(out);

  themes.forEach(theme => {
    const outTheme = path.join(out, theme);
    fs.mkdirSync(outTheme);

    locales.forEach(locale => {
      const outLocale = path.join(outTheme, locale);
      fs.mkdirSync(outLocale);

      routes.forEach(route => {
        const outLocalePage = path.join(outLocale, route.filepath);
        if (route.filepath) {
          fs.mkdirSync(outLocalePage);
        }

        const htmlStream = markup(route.url, theme, locale);
        const fileStream = fs.createWriteStream(path.join(outLocalePage, "index.html"));

        htmlStream.pipe(fileStream);
        fileStream.on("close", () => {
          console.log(`[render] Done writing! Theme: ${theme}, url: ${route.url}`); // eslint-disable-line no-console
        });

        fileStream.on("error", err => {
          console.error("[render] Error!", err); // eslint-disable-line no-console
        });
      });
    });
  });
}

render();
