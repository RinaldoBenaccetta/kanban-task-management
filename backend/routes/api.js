'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/api', async function (request, reply) {
      return 'Hello world from backend api route!'
      // return { root: true }
  })
}
