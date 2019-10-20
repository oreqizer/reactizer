/* eslint-disable import/first */

import Koa from "koa";
import logger from "koa-logger";
import helmet from "koa-helmet";
import serve from "koa-static";
import path from "path";

import dotenv from "dotenv-safe";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
  example: path.resolve(__dirname, "../../.env.example"),
});

import pages from "./pages";
import app from "./app";

const koa = new Koa();

koa.use(helmet());

koa.use(logger());

koa.use(serve(path.join(__dirname, "../../static/")));

koa.use(pages);

koa.use(app);

koa.listen(process.env.PORT || 3000);
