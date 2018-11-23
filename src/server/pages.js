// @flow strict
/* eslint-disable no-param-reassign */
import fs from "fs";
import path from "path";
import type { Context } from "koa";

const base = path.join(__dirname, "../static/pages");

async function pages(ctx: Context, next: () => Promise<void>) {
  const [theme = "main", locale = "en"] = ctx.path.slice(1).split("/"); // /<theme>/<locale>

  const filepath = path.join(base, theme, locale, ctx.path, "index.html");
  if (fs.existsSync(filepath)) {
    ctx.status = 200;
    ctx.type = "text/html; charset=utf-8";
    ctx.body = fs.createReadStream(filepath);
  } else {
    await next();
  }
}

export default pages;
