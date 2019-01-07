import { Middleware } from 'koa';
import { RouterPaths } from '../../dist';
import test from './test';

const index: Middleware = async (c, next) => {
  c.session.data = c.request.body;
  c.body = {
    status: Boolean(c.session),
    data: c.session
  };
  await next();
};

export const postPaths: RouterPaths = {
  'index': {
    path: '/',
    ware: index
  },
  'test': {
    path: '/test',
    ware: test,
    withoutPrefix: true
  }
};

export default postPaths;
