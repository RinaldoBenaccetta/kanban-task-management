'use strict'

const { getBoardsSchema } = require('../controllers/schemas/boards.js')
const { getBoardSchema } = require('../controllers/schemas/boards.js')
const { readBoard } = require('../models/board')
const { readBoards } = require('../models/boards')

module.exports = async function (fastify, opts) {
    /**
     * Returns all boards names and id
     */
    fastify.get('/api/boards', {
        schema: getBoardsSchema,
        handler: async (req, reply) => {
            reply.send(await readBoards())
        },
    })

    /**
     * returns complete board according to provide id
     */
    fastify.get('/api/board/:id', {
        schema: getBoardSchema,
        params: {
            id: { type: 'string' },
        },
        handler: async (req, reply) => {
            reply.send(await readBoard(req.params.id))
        },
    })
}
