'use strict'

module.exports = async function (fastify, opts) {
    fastify.put('/api/board', async function (request, reply) {
        return 'update board'
    })
}
