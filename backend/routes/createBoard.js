'use strict'

module.exports = async function (fastify, opts) {
    fastify.post('/api/board', async function (request, reply) {
        return 'create board'
    })
}
