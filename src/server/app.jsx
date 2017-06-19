/* @flow */
/* eslint-disable no-param-reassign */
import React from 'react';
import ReactServer from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import type { Context } from 'koa';

import Root from 'client/scenes/Root';
import Html from './markup/Html';


async function app(ctx: Context) {
  const sheet = new ServerStyleSheet();
  const root = ReactServer.renderToString((
    <StyleSheetManager sheet={sheet.instance}>
      <Root />
    </StyleSheetManager>
  ));

  ctx.body = ReactServer.renderToStaticMarkup((
    <Html
      root={root}
      sheet={sheet.getStyleElement()}
    />
  ));

  ctx.status = 200;
}

export default app;
