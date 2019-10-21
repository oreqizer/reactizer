import Koa from "koa";
import logger from "koa-logger";
import helmet from "koa-helmet";
import serve from "koa-static";
import path from "path";

import { PORT } from "server/config";
import pages from "server/pages";
import app from "server/app";

const koa = new Koa();

koa.use(helmet());

koa.use(logger());

koa.use(serve(path.join(__dirname, "../static/")));

koa.use(pages);

koa.use(app);

koa.listen(PORT);
