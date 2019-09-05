import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router";

import Root from "client/scenes/Root";
import { Theme } from "client/styles/theme";
import { IntlRaw } from "client/records/Intl";
import { extractor } from "server/config";
import { themes, themeMap, intls, intlMap } from "server/data";
import Html from "./Html";

function markup(url: string, themeId: string, localeId: string) {
  const theme: Theme = themes[themeId];
  const intlRaw: IntlRaw = intls[localeId];

  const sheet = new ServerStyleSheet();
  const root = ReactDOM.renderToString(
    extractor.collectChunks(
      sheet.collectStyles(
        <StaticRouter>
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
      locale={localeId}
      themeFile={themeMap[themeId]}
      intlFile={intlMap[localeId]}
    />,
  );
}

export default markup;
