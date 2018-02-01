/* @flow */
import React from "react";
import { hydrate } from "react-dom";

import Root from "./scenes/Root";

const app = document.getElementById("react");

if (app) {
  hydrate(<Root />, app);
}

// Hot reload
// ---

/* eslint-disable no-undef */
if (module.hot) {
  module.hot.accept();
}
