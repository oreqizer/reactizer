// @flow strict
/* eslint-disable no-underscore-dangle */
import * as React from "react";
import { hydrate } from "react-dom";
import { ThemeProvider } from "styled-components";

import Root from "./scenes/Root";
import type { Theme } from "./records/Theme";
import type { IntlRaw } from "./records/Intl";
import { Provider as IntlProvider } from "./services/intl/context";
import InitIntl from "./components/InitIntl";

const app = document.getElementById("react");

const theme: Theme = window.__THEME__;
const intlRaw: IntlRaw = window.__INTL__;

if (app) {
  hydrate(
    <ThemeProvider theme={theme}>
      <InitIntl intl={intlRaw}>
        {intl => (
          <IntlProvider value={intl}>
            <Root />
          </IntlProvider>
        )}
      </InitIntl>
    </ThemeProvider>,
    app,
  );
}

// Hot reload
// ---

/* eslint-disable no-undef */
if (module.hot) {
  module.hot.accept();
}
