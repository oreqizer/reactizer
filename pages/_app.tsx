import * as React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import fetch from "isomorphic-unfetch";

import InitIntl from "client/components/InitIntl";
import { Provider as IntlProvider } from "client/services/intl/context";

// eslint-disable-next-line fp/no-class
class MyApp extends App {
  static async getInitialProps(ctx) {
    // TODO determine these
    const localeId = "en-GB";
    const themeId = "main";

    const [locale, theme] = await Promise.all([
      fetch(`${process.env.LOCAL_URL}/static/locales/${localeId}.json`).then(res => res.json()),
      fetch(`${process.env.LOCAL_URL}/static/themes/${themeId}.json`).then(res => res.json()),
    ]);

    const props = await App.getInitialProps(ctx);

    return { ...props, theme, locale };
  }

  render() {
    const { Component, pageProps, theme, locale } = this.props;

    return (
      <InitIntl intl={locale}>
        {intl => (
          <IntlProvider value={intl}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </IntlProvider>
        )}
      </InitIntl>
    );
  }
}

export default MyApp;
