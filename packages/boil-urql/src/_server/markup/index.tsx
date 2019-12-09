import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { ServerStyleSheet, ThemeProvider } from "styled-components";
import { StaticRouter, StaticRouterContext } from "react-router";
import { Helmet } from "react-helmet";
import { IntlProvider, Locale } from "@reactizer/intl";
import { Theme } from "@reactizer/theme";

import Root from "app/Root";
import { extractor } from "_server/config";
import { themes, locales } from "_server/data";
import Html from "_server/markup/Html";

type Input = {
  url: string;
  context: StaticRouterContext;
  themeId: string;
  localeId: string;
};

function markup({ url, context, themeId, localeId }: Input) {
  const theme: Theme = themes[themeId];
  const locale: Locale = locales[localeId];

  const sheet = new ServerStyleSheet();
  const root = ReactDOM.renderToString(
    extractor.collectChunks(
      sheet.collectStyles(
        <ThemeProvider theme={theme}>
          <IntlProvider locale={locale} onChange={() => Promise.resolve(locale)}>
            <StaticRouter context={context} location={url} basename={process.env.BASENAME}>
              <Root />
            </StaticRouter>
          </IntlProvider>
        </ThemeProvider>,
      ),
    ),
  );

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
      preloadable={extractor.getLinkElements()}
      loadable={extractor.getScriptElements()}
      themeId={themeId}
      localeId={localeId}
    />,
  );
}

export default markup;
