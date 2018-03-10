/* @flow */
import * as React from "react";
// $FlowIssue
import { renderToString, renderToStaticNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import Root from "client/scenes/Root";
import Provider from "client/services/intl/Provider";
import Html from "./Html";
import { assets } from "../config";

const locales = {
  en: { "Do you even lift?": "Do you even lift?" },
  de: { "Do you even lift?": "Hast thou even hoist?" },
};

function markup(url: string, locale: string) {
  const sheet = new ServerStyleSheet();
  const context = {};
  const root = renderToString(
    <StaticRouter location={url} context={context}>
      <StyleSheetManager sheet={sheet.instance}>
        <Provider locale={locale} translations={locales[locale]}>
          <Root />
        </Provider>
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
    />,
  );
}

export default markup;
