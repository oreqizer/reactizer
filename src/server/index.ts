import Koa from "koa";
import logger from "koa-logger";
import helmet from "koa-helmet";
import serve from "koa-static";
import compress from "koa-compress";
import sslify, { xForwardedProtoResolver } from "koa-sslify";
import * as Sentry from "@sentry/node";
import path from "path";

import { ENV, PRODUCTION, PORT, SENTRY_SERVER } from "server/config";
import notfound from "server/404";
import app from "server/app";

const koa = new Koa();

if (PRODUCTION) {
  Sentry.init({
    dsn: SENTRY_SERVER,
    environment: ENV,
  });

  koa.on("error", err => {
    Sentry.captureException(err);
  });

  koa.use(compress());

  koa.use(
    sslify({
      resolver: xForwardedProtoResolver,
    }),
  );
}

koa.use(helmet());

koa.use(logger());

const YEAR = 1000 * 60 * 60 * 24 * 365;
koa.use(
  serve(path.join(__dirname, "../static/"), {
    maxage: PRODUCTION ? YEAR : 0,
  }),
);

koa.use(notfound);

koa.use(app);

koa.listen(PORT);
