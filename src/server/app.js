/* @flow */
/* eslint-disable no-param-reassign */
import type { Context } from "koa";

import markup from "./markup/index";
import { assets } from "./config";

async function app(ctx: Context) {
  ctx.body = markup(ctx.url, assets);
  ctx.status = 200;
}

export default app;
