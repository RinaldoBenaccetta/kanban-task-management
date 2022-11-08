'use strict'

module.exports = async function (fastify, opts) {
    fastify.delete('/api/board', async function (request, reply) {
        return 'delete board'
    })
}
