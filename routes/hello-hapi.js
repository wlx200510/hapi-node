module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return `Hello, ${encodeURIComponent(request.params.name)}!`;
  },
  config: {
    tags: ['api', 'tests'],
    description: '测试hello-hapi'
  }
}]
