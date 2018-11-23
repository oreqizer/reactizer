// @flow strict
/* eslint-disable no-param-reassign */
import type { Context } from "koa";

import markup from "./markup";

async function app(ctx: Context) {
  const [theme = "en", locale = "main"] = ctx.path.slice(1); // /<theme>/<locale>

  ctx.status = 200;
  ctx.type = "text/html; charset=utf-8";
  ctx.body = markup(ctx.url, theme, locale);
}

export default app;
