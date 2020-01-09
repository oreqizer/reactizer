/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { Provider as UrqlProvider, ssrExchange } from "urql";
import ssrPrepass from "react-ssr-prepass";
import { ServerStyleSheet, ThemeProvider } from "styled-components";
import { Router } from "wouter";
import useStaticLocation from "wouter/static-location";
import { Helmet } from "react-helmet";
import { IntlProvider } from "@reactizer/intl";

import Root from "app/Root";
import RootSync from "app/RootSync";
import { extractor } from "_server/config";
import { locales, themes } from "_server/data";
import getClient from "_server/markup/getClient";
import Html from "_server/markup/Html";
import { getLocale, getTheme } from "setup";

type Input = {
  url: string;
  themeId: string;
  localeId: string;
};

async function markup({ url, themeId, localeId }: Input) {
  const theme = getTheme({ id: themeId, data: themes });
  const locale = getLocale({ id: localeId, data: locales });

  const ssrCache = ssrExchange();
  const client = getClient(ssrCache);

  await ssrPrepass(
    <UrqlProvider value={client}>
      <Router hook={useStaticLocation(url)} base={process.env.BASENAME}>
        <RootSync />
      </Router>
    </UrqlProvider>,
  );

  const data = ssrCache.extractData();

  const sheet = new ServerStyleSheet();
  const root = ReactDOM.renderToString(
    extractor.collectChunks(
      sheet.collectStyles(
        <UrqlProvider value={client}>
          <ThemeProvider theme={theme}>
            <IntlProvider locale={locale} onChange={() => Promise.resolve(locale)}>
              <Router hook={useStaticLocation(url)} base={process.env.BASENAME}>
                <Root />
              </Router>
            </IntlProvider>
          </ThemeProvider>
        </UrqlProvider>,
      ),
    ),
  );

  const helmet = Helmet.renderStatic();

  return ReactDOM.renderToStaticMarkup(
    <Html
      root={root}
      helmet={helmet}
      styles={sheet.getStyleElement()}
      data={JSON.stringify(data)}
      preloadable={extractor.getLinkElements()}
      loadable={extractor.getScriptElements()}
      themeId={themeId}
      localeId={localeId}
    />,
  );
}

export default markup;
