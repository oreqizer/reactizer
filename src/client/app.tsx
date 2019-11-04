/* eslint-disable no-underscore-dangle */
import * as React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";
import * as Sentry from "@sentry/browser";

import Root from "client/Root";
import { Palette, makeTheme } from "./styles/theme";
import { IntlRaw } from "./records/Intl";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  debug: process.env.NODE_ENV !== "production",
  release: process.env.SENTRY_RELEASE,
  environment: process.env.SENTRY_ENVIRONMENT,
});

const app = document.getElementById("react");
const theme: Palette = window.__THEME__;
const intlRaw: IntlRaw = window.__INTL__;

loadableReady(() => {
  if (app) {
    hydrate(
      <BrowserRouter basename={process.env.BASENAME}>
        <Root theme={makeTheme(theme)} intlRaw={intlRaw} />
      </BrowserRouter>,
      app,
    );
  }
});

// Hot reload
// ---

/* eslint-disable no-undef */
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
