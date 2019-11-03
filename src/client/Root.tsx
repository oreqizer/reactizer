import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import { Index } from "client/Routes";
import routes from "client/consts/routes";
import { Theme } from "client/styles/theme";
import { IntlRaw } from "client/records/Intl";
import InitIntl from "client/components/InitIntl";
import { Provider as IntlProvider } from "client/services/intl/context";
import Favicon from "client/components/Favicon";
import Sentry from "client/components/Sentry";

type Props = {
  theme: Theme;
  intlRaw: IntlRaw;
};

const Root = ({ theme, intlRaw }: Props) => (
  <ThemeProvider theme={theme}>
    <InitIntl intl={intlRaw}>
      {intl => (
        <IntlProvider value={intl}>
          <Helmet titleTemplate="%s | Reactizer" defaultTitle={`${intl.t(__("Home"))} | Reactizer`}>
            <html lang={intl.id} />

            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, viewport-fit=cover"
            />
            <meta name="theme-color" content={theme.colorProductNormal} />

            <Favicon />

            <link
              href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
              rel="stylesheet"
            />

            <Sentry />
          </Helmet>

          <Normalize />

          <Switch>
            <Route path={routes.INDEX} exact render={() => <Index />} />

            <Redirect to={routes.INDEX} />
          </Switch>
        </IntlProvider>
      )}
    </InitIntl>
  </ThemeProvider>
);

export default Root;
