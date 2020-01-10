/* eslint-disable no-console */
import Koa from "koa";
import logger from "koa-logger";
import helmet from "koa-helmet";
import serve from "koa-static";
import compress from "koa-compress";
import sslify, { xForwardedProtoResolver } from "koa-sslify";
import * as Sentry from "@sentry/node";
import path from "path";

import { PRODUCTION, PORT } from "_server/config";
import notfound from "_server/404";
import app from "_server/app";

const koa = new Koa();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  debug: PRODUCTION,
  release: process.env.SENTRY_RELEASE,
  environment: process.env.SENTRY_ENVIRONMENT,
});

if (PRODUCTION) {
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
const opts = {
  maxage: PRODUCTION ? YEAR : 0,
};

koa.use(serve(path.join(__dirname, "../static/"), opts));

koa.use(serve(path.join(__dirname, "../../public/"), opts));

koa.use(notfound);

koa.use(app);

koa.listen(PORT);
