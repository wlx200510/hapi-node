'use strict';
require('env2')('./.env')
const Hapi = require('@hapi/hapi');
const config = require('./config');
const routerHH = require('./routes/hello-hapi')
// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger')

const init = async() => {

  const server = Hapi.server({
    port: config.port,
    host: config.host
  });

  // 注册插件
  await server.register([
    ...pluginHapiSwagger
  ])

  server.route([
    ...routerHH
  ])

  await server.start()
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1);
});

init()
