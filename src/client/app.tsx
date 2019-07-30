/* eslint-disable no-underscore-dangle */
import * as React from "react";
import { hydrate } from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";
import Root from "client/scenes/Root";
import { Theme } from "client/styles/theme";
import { IntlRaw } from "client/records/Intl";
import { Provider as IntlProvider } from "client/services/intl/context";
import InitIntl from "client/components/InitIntl";

const app = document.getElementById("react");
const theme: Theme = window.__THEME__;
const intlRaw: IntlRaw = window.__INTL__;

loadableReady(() => {
  if (app) {
    hydrate(
      <ThemeProvider theme={theme}>
        <InitIntl intl={intlRaw}>
          {intl => (
            <IntlProvider value={intl}>
              <BrowserRouter>
                <Root />
              </BrowserRouter>
            </IntlProvider>
          )}
        </InitIntl>
      </ThemeProvider>,
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
