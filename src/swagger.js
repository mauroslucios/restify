const restify = ('restify')
const server = restify.createServer()
const restifySwaggerJsdoc = require('restify-swagger-jsdoc');

restifySwaggerJsdoc.createSwaggerPage({
  title: 'API documentation',
  version: '1.0.0',
  server: server, // created restify server object,
  path: '/api-docs', // url to view generated docs,
  apis: ['./src/routes/*.js']
})
