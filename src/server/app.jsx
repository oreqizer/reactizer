/* @flow */
/* eslint-disable no-param-reassign */
import React from 'react';
import ReactServer from 'react-dom/server';
import type { Context } from 'koa';

import Root from 'client/scenes/Root';
import Html from './markup/Html';


async function app(ctx: Context) {
  const root = ReactServer.renderToString(<Root />);

  ctx.body = ReactServer.renderToStaticMarkup(<Html root={root} />);
  ctx.status = 200;
}

export default app;
