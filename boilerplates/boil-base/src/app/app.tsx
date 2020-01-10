/* eslint-disable no-underscore-dangle, fp/no-unused-expression */
import * as React from "react";
import { hydrate } from "react-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "wouter";
import { loadableReady } from "@loadable/component";
import * as Sentry from "@sentry/browser";
import { IntlProvider, Locale } from "@reactizer/intl";
import { Palette, makeTheme } from "@reactizer/theme";

import Root from "app/Root";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  debug: process.env.NODE_ENV !== "production",
  release: process.env.SENTRY_RELEASE,
  environment: process.env.SENTRY_ENVIRONMENT,
});

const app = document.getElementById("react");
const palette: Palette = window.__THEME__;
const locale: Locale = window.__INTL__;

loadableReady(() => {
  if (app) {
    hydrate(
      <ThemeProvider theme={makeTheme(palette)}>
        <IntlProvider locale={locale} onChange={() => Promise.resolve(locale)}>
          <Router base={process.env.BASENAME}>
            <Root />
          </Router>
        </IntlProvider>
      </ThemeProvider>,
      app,
    );
  }
});

// Hot reload
// ---

/* eslint-disable no-undef, @typescript-eslint/ban-ts-ignore */
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}