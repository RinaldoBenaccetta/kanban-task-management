'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/api/task', async function (request, reply) {
        return 'read task'
    })
}
