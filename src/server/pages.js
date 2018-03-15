/* @flow */
/* eslint-disable no-param-reassign */
import fs from "fs";
import path from "path";
import type { Context } from "koa";

const base = path.join(__dirname, "../static/pages");

async function pages(ctx: Context, next: () => Promise<any>) {
  const locale = ctx.query.locale || "en";
  const brand = ctx.query.brand || "main";

  const filepath = path.join(base, brand, locale, ctx.path, "index.html");
  if (fs.existsSync(filepath)) {
    console.log("[server] Static page!", ctx.url);

    ctx.status = 200;
    ctx.type = "text/html; charset=utf-8";
    ctx.body = fs.createReadStream(filepath);
  } else {
    next();
  }
}

export default pages;
