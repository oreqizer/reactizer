/* eslint-disable no-param-reassign */
import { Context } from "koa";
import { parse } from "url";

import markup from "./markup";

async function app(ctx: Context, next: () => Promise<void>) {
  const urlObj = parse(ctx.url);

  // skip 404s
  if (urlObj.pathname && urlObj.pathname.match(/\.(jpe?g|png|gif|bmp|svg|ico|js|json|txt|css)$/i)) {
    return next();
  }

  ctx.status = 200;
  ctx.type = "text/html; charset=utf-8";
  ctx.body = markup(ctx.url, "main", "en-GB");

  return next();
}

export default app;
