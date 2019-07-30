import "core-js/modules/es6.object.define-property"; // Obsolete, see https://github.com/relay-tools/react-relay-network-modern/issues/69
import Koa from "koa";
import logger from "koa-logger";
import serve from "koa-static";
import path from "path";

import pages from "./pages";
import app from "./app";

const koa = new Koa();

koa.use(logger());

koa.use(serve(path.join(__dirname, "../../static/")));

koa.use(pages);

koa.use(app);

koa.listen(process.env.PORT || 3000);
