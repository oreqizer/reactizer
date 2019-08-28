import * as React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";

import InitIntl from "client/components/InitIntl";
import { Provider as IntlProvider } from "client/services/intl/context";

// eslint-disable-next-line fp/no-class
class MyApp extends App {
  static async getInitialProps(ctx) {
    const props = await App.getInitialProps(ctx);

    return { ...props, theme: ctx.query.theme, intl: ctx.query.intl };
  }

  render() {
    const {
      Component,
      pageProps: { theme, intl, ...rest },
    } = this.props;

    return (
      <InitIntl intl={intl}>
        {intlFull => (
          <IntlProvider value={intlFull}>
            <ThemeProvider theme={theme}>
              <Component {...rest} />
            </ThemeProvider>
          </IntlProvider>
        )}
      </InitIntl>
    );
  }
}

export default MyApp;
