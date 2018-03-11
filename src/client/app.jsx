/* @flow */
/* eslint-disable no-underscore-dangle */
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Root from "./scenes/Root";
import Provider from "./services/intl/Provider";

const app = document.getElementById("react");

if (app) {
  hydrate(
    <BrowserRouter>
      <ThemeProvider theme={window.__THEME__}>
        <Provider locale={window.__LOCALE__} translations={window.__TRANSLATIONS__}>
          <Root />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>,
    app,
  );
}

// Hot reload
// ---

/* eslint-disable no-undef */
if (module.hot) {
  module.hot.accept();
}
