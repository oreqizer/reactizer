/* @flow */
import * as React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import Root from "../../client/scenes/Root";
import Html from "./Html";

type Assets = any; // webpack

// TODO turn into a stream
function markup(path: string, assets: Assets): string {
  const sheet = new ServerStyleSheet();
  const root = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Root />
    </StyleSheetManager>,
  );

  return renderToStaticMarkup(<Html root={root} assets={assets} sheet={sheet.getStyleElement()} />);
}

export default markup;
