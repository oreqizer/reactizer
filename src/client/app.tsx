/* eslint-disable no-underscore-dangle */
import * as React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";
import Root from "client/scenes/Root";
import { Theme } from "client/styles/theme";
import { IntlRaw } from "client/records/Intl";

const app = document.getElementById("react");
const theme: Theme = window.__THEME__;
const intlRaw: IntlRaw = window.__INTL__;

loadableReady(() => {
  if (app) {
    hydrate(
      <BrowserRouter>
        <Root theme={theme} intlRaw={intlRaw} />
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
