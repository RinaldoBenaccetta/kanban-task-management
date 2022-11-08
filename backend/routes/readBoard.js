'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/api/board', async function (request, reply) {
        return 'read board'
    })
}
