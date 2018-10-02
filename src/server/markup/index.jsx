// @flow strict
import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";

import Root from "client/scenes/Root";
import { Provider as OurThemeProvider } from "client/services/theme/context";
import { Provider as IntlProvider } from "client/services/intl/context";
import Html from "./Html";
import { assets } from "../config";
import { themes, intls } from "../data";

function markup(url: string, themeId: string, localeId: string) {
  const theme = themes[themeId];
  const intl = intls[localeId];

  const sheet = new ServerStyleSheet();
  const root = ReactDOM.renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider theme={theme}>
        <OurThemeProvider value={theme}>
          <IntlProvider value={intl}>
            <Root />
          </IntlProvider>
        </OurThemeProvider>
      </ThemeProvider>
    </StyleSheetManager>,
  );

  return ReactDOM.renderToStaticNodeStream(
    <Html root={root} css={sheet.getStyleElement()} assets={assets} theme={theme} intl={intl} />,
  );
}

export default markup;
