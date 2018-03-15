/* @flow */
/* eslint-disable no-param-reassign */
import type { Context } from "koa";

import markup from "./markup";

async function app(ctx: Context) {
  console.log("[server] SSR!", ctx.url);

  const locale = ctx.query.locale || "en";
  const brand = ctx.query.brand || "main";

  ctx.status = 200;
  ctx.type = "text/html; charset=utf-8";
  ctx.body = markup(ctx.url, brand, locale);
}

export default app;
