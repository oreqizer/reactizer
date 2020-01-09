/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { ThemeProvider, ServerStyleSheet } from "styled-components";
import { Router } from "wouter";
import useStaticLocation from "wouter/static-location";
import { Helmet } from "react-helmet";
import { IntlProvider } from "@reactizer/intl";

import Root from "app/Root";
import { extractor } from "_server/config";
import { themes, locales } from "_server/data";
import Html from "_server/markup/Html";
import { getLocale, getTheme } from "setup";

type Input = {
  url: string;
  themeId: string;
  localeId: string;
};

function markup({ url, themeId, localeId }: Input) {
  const theme = getTheme({ id: themeId, data: themes });
  const locale = getLocale({ id: localeId, data: locales });

  const sheet = new ServerStyleSheet();
  const root = ReactDOM.renderToString(
    extractor.collectChunks(
      sheet.collectStyles(
        <ThemeProvider theme={theme}>
          <IntlProvider locale={locale} onChange={() => Promise.resolve(locale)}>
            <Router hook={useStaticLocation(url)} base={process.env.BASENAME}>
              <Root />
            </Router>
          </IntlProvider>
        </ThemeProvider>,
      ),
    ),
  );

  const helmet = Helmet.renderStatic();

  return Promise.resolve(
    ReactDOM.renderToStaticMarkup(
      <Html
        root={root}
        helmet={helmet}
        styles={sheet.getStyleElement()}
        preloadable={extractor.getLinkElements()}
        loadable={extractor.getScriptElements()}
        themeId={themeId}
        localeId={localeId}
      />,
    ),
  );
}

export default markup;
