/* eslint-disable fp/no-class, react/no-danger */
import * as React from "react";
import Document from "next/document";
import { ServerStyleSheet, ThemeProvider } from "styled-components";

import InitIntl from "client/components/InitIntl";
import { Provider as IntlProvider } from "client/services/intl/context";
import { themes, intls } from "server/data";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // TODO determine these from the URL query
    const theme = themes.main;
    const intlRaw = intls["en-GB"];

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
