/* @flow */
/* eslint-disable no-underscore-dangle */
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Root from "./scenes/Root";
import Provider from "./services/intl/Provider";

const app = document.getElementById("react");

if (app) {
  hydrate(
    <BrowserRouter>
      <Provider locale={window.__LOCALE__} translations={window.__TRANSLATIONS__}>
        <Root />
      </Provider>
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
