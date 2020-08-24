/*
 * @Descripttion: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-08-24 12:06:33
 * @LastEditors: wqq
 * @LastEditTime: 2020-08-24 14:38:07
 */
const path = require('path');
const isDev = think.env === 'development';
const cors = require('koa2-cors');
module.exports = [
  {
    handle: cors,
    options: {}
  },
  {
    handle: 'meta',
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  {
    handle: 'resource',
    enable: isDev,
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(static|favicon\.ico)/
    }
  },
  {
    handle: 'trace',
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  },
  {
    handle: 'payload',
    options: {
      keepExtensions: true,
      limit: '5mb'
    }
  },
  {
    handle: 'router',
    options: {}
  },
  'logic',
  'controller'
];
