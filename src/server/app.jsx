/* @flow */
/* eslint-disable no-param-reassign */
import * as React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import type { Context } from "koa";

import Root from "../client/scenes/Root";
import Html from "./markup/Html";
import { assets } from "./config";

async function app(ctx: Context) {
  const sheet = new ServerStyleSheet();
  const root = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Root />
    </StyleSheetManager>,
  );

  ctx.body = renderToStaticMarkup(
    <Html root={root} assets={assets} sheet={sheet.getStyleElement()} />,
  );

  ctx.status = 200;
}

export default app;
