'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/api/boards', async function (request, reply) {
        return 'read boards list'
    })
}
