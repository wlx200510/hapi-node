const inert = require('inert')
const vision = require('vision')
const package = require('package')
const hapiSwagger = require('hapi-swagger')

module.exports = [
  inert, // 此插件用于创建静态页面
  vision,
  {
    plugin: hapiSwagger,
    options: {
      info: {
        title: '接口文档',
        version: package.version,
      },
      grouping: 'tags',
      tags: [
        { name: 'tests', description: '测试相关' },
      ]
    }
  }
]