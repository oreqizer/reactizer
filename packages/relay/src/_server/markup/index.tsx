import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter, StaticRouterContext } from "react-router";
import { Helmet } from "react-helmet";

import Root from "app/Root";
import { Theme } from "app/styles/theme";
import { IntlRaw } from "app/records/Intl";
import { extractor } from "_server/config";
import { themes, intls } from "_server/data";
import Html from "_server/markup/Html";

type Input = {
  url: string;
  context: StaticRouterContext;
  themeId: string;
  localeId: string;
};

function markup({ url, context, themeId, localeId }: Input) {
  const theme: Theme = themes[themeId];
  const intlRaw: IntlRaw = intls[localeId];

  const sheet = new ServerStyleSheet();
  const root = ReactDOM.renderToString(
    extractor.collectChunks(
      sheet.collectStyles(
        <StaticRouter context={context} location={url} basename={process.env.BASENAME}>
          <Root theme={theme} intlRaw={intlRaw} />
        </StaticRouter>,
      ),
    ),
  );

  const helmet = Helmet.renderStatic();

  // Redirect
  if (context.url) {
    return null;
  }

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