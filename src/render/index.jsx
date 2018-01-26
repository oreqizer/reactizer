/* @flow */
import fs from "fs";
import path from "path";
import * as React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import Root from "../client/scenes/Root";
import Html from "./Html";

type Route = {
  path: string,
  filename: string,
};

// TODO config
const assets = JSON.parse(fs.readFileSync(path.join(__dirname, "../assets.json")));

const outPath = path.join(__dirname, "../static/pages");

// TODO run at server start, move to server folder
function render(routes: Route[]) {
  fs.mkdirSync(outPath);

  routes.forEach(route => {
    const sheet = new ServerStyleSheet();
    // TODO merge with server logic
    const root = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <Root />
      </StyleSheetManager>,
    );

    const html = renderToStaticMarkup(
      <Html root={root} assets={assets} sheet={sheet.getStyleElement()} />,
    );

    fs.writeFileSync(path.join(outPath, route.filename), html);
  });
}

const routes = [
  {
    path: "/",
    filename: "index.html",
  },
];

export default render(routes);
