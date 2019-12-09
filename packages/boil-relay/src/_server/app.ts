/* eslint-disable no-param-reassign, fp/no-mutation, fp/no-unused-expression */
import fsx from "fs-extra";
import path from "path";
import { Context } from "koa";
import { StaticRouterContext } from "react-router";

import { getLocale, getTheme } from "setup";
import markup from "_server/markup";

const PAGES = path.join(__dirname, "../../static/pages");

function app(ctx: Context) {
  const themeId = getTheme(ctx);
  const localeId = getLocale(ctx);

  const filepath = path.join(PAGES, themeId, localeId, ctx.path, "index.html");
  if (fsx.existsSync(filepath)) {
    ctx.status = 200;
    ctx.type = "text/html; charset=utf-8";
    ctx.body = fsx.createReadStream(filepath);
    return;
  }

  const context: StaticRouterContext = {};
  const html = markup({ url: ctx.url, context, themeId, localeId });
  if (!html && context.url) {
    ctx.redirect(context.url);
    return;
  }

  ctx.status = 200;
  ctx.type = "text/html; charset=utf-8";
  ctx.body = `<!DOCTYPE html>${html}`;
}

export default app;
