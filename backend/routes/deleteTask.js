'use strict'

module.exports = async function (fastify, opts) {
    fastify.delete('/api/task', async function (request, reply) {
        return 'delete task'
    })
}
