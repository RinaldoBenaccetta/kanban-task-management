'use strict'

module.exports = async function (fastify, opts) {
    fastify.post('/api/task', async function (request, reply) {
        return 'create task.'
    })
}
