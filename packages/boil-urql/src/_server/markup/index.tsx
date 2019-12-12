import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter, StaticRouterContext } from "react-router";
import { Helmet } from "react-helmet";
import { Provider as UrqlProvider } from "urql";
import ssrPrepass from "react-ssr-prepass";
import { IntlProvider, Locale } from "@reactizer/intl";
import { ThemeProvider, Theme } from "@reactizer/theme";

import Root from "app/Root";
import { extractor } from "_server/config";
import { themes, locales } from "_server/data";
import urql, { ssrCache } from "_server/markup/urql";
import Html from "_server/markup/Html";

type Input = {
  url: string;
  context: StaticRouterContext;
  themeId: string;
  localeId: string;
};

async function markup({ url, context, themeId, localeId }: Input) {
  const theme: Theme = themes[themeId];
  const locale: Locale = locales[localeId];

  const app = (
    <UrqlProvider value={urql}>
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
