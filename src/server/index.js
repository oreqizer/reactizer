// @flow strict
import Koa from "koa";
import logger from "koa-logger";
import serve from "koa-static";
import path from "path";

import "./globals"; // Must be first!
import { port } from "./config";
import pages from "./pages";
import app from "./app";

const koa = new Koa();

koa.use(logger());

koa.use(serve(path.join(__dirname, "../static/")));

koa.use(pages);

koa.use(app);

koa.listen(port);
