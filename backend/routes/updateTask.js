'use strict'

module.exports = async function (fastify, opts) {
    fastify.put('/api/task', async function (request, reply) {
        return 'update task'
    })
}
