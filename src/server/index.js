/* @flow */
import Koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import path from 'path';

import app from './app';
import { port } from './config';


const koa = new Koa();

koa.use(logger());

koa.use(serve(path.join(__dirname, '../static/')));

koa.use(app);

koa.listen(port);
