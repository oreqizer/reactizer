// @flow strict
/* eslint-disable no-param-reassign */
import type { Context } from "koa";

import markup from "./markup";

async function app(ctx: Context) {
  const locale = ctx.query.locale || "en";
  const theme = ctx.query.theme || "main";

  ctx.status = 200;
  ctx.type = "text/html; charset=utf-8";
  ctx.body = markup(ctx.url, theme, locale);
}

export default app;
