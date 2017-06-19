/* @flow */
import React from 'react';
import { render } from 'react-dom';

import Root from './scenes/Root';


const app = document.getElementById('react');

if (app) {
  render(<Root />, app);
}

// Hot reload
// ---

/* eslint-disable no-undef */
if (module.hot) {
  module.hot.accept();
}
