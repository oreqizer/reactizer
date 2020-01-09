/* eslint-disable no-param-reassign, require-atomic-updates, fp/no-mutation, fp/no-unused-expression */
import fsx from "fs-extra";
import path from "path";
import { Context } from "koa";

import { getLocaleId, getThemeId } from "setup";
import markup from "_server/markup";

const PAGES = path.join(__dirname, "../../static/pages");

async function app(ctx: Context) {
  const themeId = getThemeId(ctx);
  const localeId = getLocaleId(ctx);

  const filepath = path.join(PAGES, themeId, localeId, ctx.path, "index.html");
  if (fsx.existsSync(filepath)) {
    ctx.status = 200;
    ctx.type = "text/html; charset=utf-8";
    ctx.body = fsx.createReadStream(filepath);
    return;
  }

  const html = await markup({ url: ctx.url, themeId, localeId });

  ctx.status = 200;
  ctx.type = "text/html; charset=utf-8";
  ctx.body = `<!DOCTYPE html>${html}`;
}

export default app;
