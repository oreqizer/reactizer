// @flow strict
import * as React from "react";
// $FlowIssue
import { renderToString, renderToStaticNodeStream } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";

import Root from "client/scenes/Root";
import * as themeContext from "client/services/theme/context";
import { themeDefault } from "client/records/Theme";
import * as intlContext from "client/services/intl/context";
import { intlDefault } from "client/records/Intl";
import Html from "./Html";
import { assets } from "../config";

const themes = {
  main: themeDefault,
  alt: { name: "Crimsonizer", colors: { primary: "crimson" } },
};

const intls = {
  en: intlDefault,
  de: { locale: "de", translations: { "Do you even lift?": "Hast thou even hoist?" } },
};

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
