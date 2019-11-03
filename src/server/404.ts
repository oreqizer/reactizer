import { Context } from "koa";

async function notfound(ctx: Context, next: () => Promise<void>) {
  const { pathname } = ctx.request.URL;
  // File 404s
  if (pathname.match(/\.\w{1,4}$/i)) {
    return null;
  }
  return next();
}

export default notfound;
