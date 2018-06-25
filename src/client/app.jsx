// @flow strict
/* eslint-disable no-underscore-dangle */
import * as React from "react";
import { hydrate } from "react-dom";
import { ThemeProvider } from "styled-components";

import Root from "./scenes/Root";
import { Provider as OurThemeProvider } from "./services/theme/context";
import { Provider as IntlProvider } from "./services/intl/context";

const app = document.getElementById("react");

// TODO add a translate function to the Intl provider

if (app) {
  hydrate(
    <ThemeProvider theme={window.__THEME__}>
      <OurThemeProvider value={window.__THEME__}>
        <IntlProvider value={window.__INTL__}>
          <Root />
        </IntlProvider>
      </OurThemeProvider>
    </ThemeProvider>,
    app,
  );
}

// Hot reload
// ---

// TODO add react-hot-loader
/* eslint-disable no-undef */
if (module.hot) {
  module.hot.accept();
}
