import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router";

import Root from "client/Root";
import { Theme } from "client/styles/theme";
import { IntlRaw } from "client/records/Intl";
import { extractor } from "server/config";
import { themes, intls } from "server/data";
import Html from "./Html";

function markup(url: string, themeId: string, localeId: string) {
  const theme: Theme = themes[themeId];
  const intlRaw: IntlRaw = intls[localeId];

  const sheet = new ServerStyleSheet();
  const root = ReactDOM.renderToString(
    extractor.collectChunks(
      sheet.collectStyles(
        <StaticRouter location={url}>
          <Root theme={theme} intlRaw={intlRaw} />
        </StaticRouter>,
      ),
    ),
  );

  return ReactDOM.renderToStaticNodeStream(
    <Html
      root={root}
      styles={sheet.getStyleElement()}
      preloadable={extractor.getLinkElements()}
      loadable={extractor.getScriptElements()}
      color={theme.colorProductNormal}
      themeId={themeId}
      localeId={localeId}
    />,
  );
}

export default markup;
