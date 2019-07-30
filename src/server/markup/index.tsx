import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { ServerStyleSheet, ThemeProvider } from "styled-components";
import { StaticRouter } from "react-router";

import Root from "client/scenes/Root";
import InitIntl from "client/components/InitIntl";
import { Provider as IntlProvider } from "client/services/intl/context";
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
        <ThemeProvider theme={theme}>
          <InitIntl intl={intlRaw}>
            {intl => (
              <IntlProvider value={intl}>
                <StaticRouter>
                  <Root />
                </StaticRouter>
              </IntlProvider>
            )}
          </InitIntl>
        </ThemeProvider>,
      ),
    ),
  );

  return ReactDOM.renderToStaticNodeStream(
    <Html
      root={root}
      styles={sheet.getStyleElement()}
      preloadable={extractor.getLinkElements()}
      loadable={extractor.getScriptElements()}
      theme={theme}
      intl={intlRaw}
    />,
  );
}

export default markup;
