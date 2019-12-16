import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { ssrExchange, Provider as UrqlProvider } from "urql";
import ssrPrepass from "react-ssr-prepass";
import { ThemeProvider, ServerStyleSheet } from "styled-components";
import { StaticRouter, StaticRouterContext } from "react-router";
import { Helmet } from "react-helmet";
import { IntlProvider } from "@reactizer/intl";

import Root from "app/Root";
import { extractor } from "_server/config";
import { themes, locales } from "_server/data";
import getClient from "_server/markup/getClient";
import Html from "_server/markup/Html";
import { getLocale, getTheme } from "setup";

type Input = {
  url: string;
  context: StaticRouterContext;
  themeId: string;
  localeId: string;
};

async function markup({ url, context, themeId, localeId }: Input) {
  const theme = getTheme({ id: themeId, data: themes });
  const locale = getLocale({ id: localeId, data: locales });

  const ssrCache = ssrExchange();
  const client = getClient(ssrCache);

  const app = (
    <UrqlProvider value={client}>
      <ThemeProvider theme={theme}>
        <IntlProvider locale={locale} onChange={() => Promise.resolve(locale)}>
          <StaticRouter context={context} location={url} basename={process.env.BASENAME}>
            <Root />
          </StaticRouter>
        </IntlProvider>
      </ThemeProvider>
    </UrqlProvider>
  );

  await ssrPrepass(app);

  const data = ssrCache.extractData();

  const sheet = new ServerStyleSheet();
  const root = ReactDOM.renderToString(extractor.collectChunks(sheet.collectStyles(app)));

  // Redirect
  if (context.url) {
    return null;
  }

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
