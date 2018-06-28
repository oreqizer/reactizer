// @flow strict
import * as React from "react";
// $FlowIssue
import { renderToString, renderToStaticNodeStream } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";

import Root from "client/scenes/Root";
import * as themeContext from "client/services/theme/context";
import * as intlContext from "client/services/intl/context";
import Html from "./Html";
import { assets } from "../config";
import { themes, intls } from "../data";

function markup(url: string, themeId: string, localeId: string) {
  const theme = themes[themeId];
  const intl = intls[localeId];

  const sheet = new ServerStyleSheet();
  const root = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider theme={theme}>
        <themeContext.Provider value={theme}>
          <intlContext.Provider value={intl}>
            <Root />
          </intlContext.Provider>
        </themeContext.Provider>
      </ThemeProvider>
    </StyleSheetManager>,
  );

  return renderToStaticNodeStream(
    <Html root={root} css={sheet.getStyleElement()} assets={assets} theme={theme} intl={intl} />,
  );
}

export default markup;
