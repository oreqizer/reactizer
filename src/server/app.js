// @flow strict
/* eslint-disable no-param-reassign */
import type { Context } from "koa";

import markup from "./markup";

async function app(ctx: Context) {
  const [theme = "main", locale = "en"] = ctx.path.slice(1).split("/"); // /<theme>/<locale>

  ctx.status = 200;
  ctx.type = "text/html; charset=utf-8";
  ctx.body = markup(ctx.url, theme, locale);
}

export default app;
