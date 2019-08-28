/* eslint-disable fp/no-class, react/no-danger */
import * as React from "react";
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

import { themes, intls } from "server/data";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      ctx.query = {
        ...ctx.query,
        // TODO determine these from the URL
        theme: themes.main,
        intl: intls["en-GB"],
      };

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
