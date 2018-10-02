// @flow strict
/* eslint-disable no-underscore-dangle */
import * as React from "react";
import { hydrate } from "react-dom";
import { ThemeProvider } from "styled-components";

import Root from "./scenes/Root";
import type { Theme } from "./records/Theme";
import { Provider as OurThemeProvider } from "./services/theme/context";
import type { Intl } from "./records/Intl";
import { Provider as IntlProvider } from "./services/intl/context";

const app = document.getElementById("react");

const theme: Theme = window.__THEME__;
// TODO add a translate function to the Intl provider
const intl: Intl = window.__INTL__;

if (app) {
  hydrate(
    <ThemeProvider theme={theme}>
      <OurThemeProvider value={theme}>
        <IntlProvider value={intl}>
          <Root />
        </IntlProvider>
      </OurThemeProvider>
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
