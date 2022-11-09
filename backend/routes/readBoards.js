'use strict'

const { getBoardsSchema } = require('../controllers/schemas/boards.js')
const { getBoardsHandler } = require('../controllers/handlers/boards.js')

const getPostsOpts = {
    schema: getBoardsSchema,
    handler: getBoardsHandler,
}

module.exports = async function (fastify, opts) {
    // fastify.get('/api/boards', async function (request, reply) {
    //     return 'read boards list'
    // })

    fastify.get('/api/boards', getPostsOpts)
}
