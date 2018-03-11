/* @flow */
import * as React from "react";
// $FlowIssue
import { renderToString, renderToStaticNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";

import Root from "client/scenes/Root";
import Provider from "client/services/intl/Provider";
import main from "client/styles/theme";
import Html from "./Html";
import { assets } from "../config";

const locales = {
  en: { "Do you even lift?": "Do you even lift?" },
  de: { "Do you even lift?": "Hast thou even hoist?" },
};

const themes = {
  main,
  alt: { primary: "crimson" },
};

function markup(url: string, theme: string, locale: string) {
  const sheet = new ServerStyleSheet();
  const context = {};
  const root = renderToString(
    <StaticRouter location={url} context={context}>
      <StyleSheetManager sheet={sheet.instance}>
        <ThemeProvider theme={themes[theme]}>
          <Provider locale={locale} translations={locales[locale]}>
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
      locale={locale}
      translations={locales[locale]}
      theme={themes[theme]}
    />,
  );
}

export default markup;
