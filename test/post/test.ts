import { AMiddleware } from '../../src';

export const test: AMiddleware = async (c, next) => {
  c.body = {
    status: true,
    data: 'string path'
  };
};

export default test;
