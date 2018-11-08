// @flow strict
import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";

import Root from "client/scenes/Root";
import InitIntl from "client/components/InitIntl";
import { Provider as IntlProvider } from "client/services/intl/context";
import type { Theme } from "client/records/Theme";
import type { IntlRaw } from "client/records/Intl";
import Html from "./Html";
import { assets } from "../config";
import { themes, intls } from "../data";

function markup(url: string, themeId: string, localeId: string) {
  const theme: Theme = themes[themeId];
  const intlRaw: IntlRaw = intls[localeId];

  const sheet = new ServerStyleSheet();
  const root = ReactDOM.renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider theme={theme}>
        <InitIntl intl={intlRaw}>
          {intl => (
            <IntlProvider value={intl}>
              <Root />
            </IntlProvider>
          )}
        </InitIntl>
      </ThemeProvider>
    </StyleSheetManager>,
  );

  return ReactDOM.renderToStaticNodeStream(
    <Html root={root} css={sheet.getStyleElement()} assets={assets} theme={theme} intl={intlRaw} />,
  );
}

export default markup;
