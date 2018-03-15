/* @flow */
import * as React from "react";
// $FlowIssue
import { renderToString, renderToStaticNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";

import Root from "client/scenes/Root";
import Provider from "client/services/statics/Provider";
import main from "client/styles/main";
import Html from "./Html";
import { assets } from "../config";

const locales = {
  en: { "Do you even lift?": "Do you even lift?" },
  de: { "Do you even lift?": "Hast thou even hoist?" },
};

const brands = {
  main,
  alt: { name: "Crimsonizer", theme: { primary: "crimson" } },
};

function markup(url: string, brandId: string, localeId: string) {
  const brand = brands[brandId];
  const locale = locales[localeId];

  const sheet = new ServerStyleSheet();
  const context = {};
  const root = renderToString(
    <StaticRouter location={url} context={context}>
      <StyleSheetManager sheet={sheet.instance}>
        <ThemeProvider theme={brand.theme}>
          <Provider locale={localeId} translations={locale} brand={brand}>
            <Root />
          </Provider>
        </ThemeProvider>
      </StyleSheetManager>
    </StaticRouter>,
  );

  return renderToStaticNodeStream(
    <Html
      root={root}
      css={sheet.getStyleElement()}
      assets={assets}
      locale={localeId}
      translations={locale}
      brand={brand}
    />,
  );
}

export default markup;
