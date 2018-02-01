/* @flow */
import fs from "fs";
import path from "path";

import markup from "./markup/index";
import { routes, assets } from "./config";

const outPath = path.join(__dirname, "../static/pages");

function render() {
  fs.mkdirSync(outPath);

  routes.forEach(route => {
    const html = markup(route.path, assets);

    fs.writeFileSync(path.join(outPath, route.filename), html);
  });
}

render();
