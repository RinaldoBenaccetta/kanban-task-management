'use strict'

const {
    getBoardsSchema,
    getBoardSchema,
    postBoardSchema,
    updateBoardSchema,
} = require('../controllers/schemas/boards.js')
const { readBoard, createBoard, updateBoard } = require('../models/board')
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

    fastify.post('/api/board/store', {
        schema: postBoardSchema,
        handler: async (req, reply) => {
            await createBoard(req.body)
            reply.send('Board added successfully')
        },
    })

    fastify.put('/api/board/edit/:id', {
        schema: updateBoardSchema,
        params: {
            id: { type: 'string' },
        },
        handler: async (req, reply) => {
            await updateBoard(req.params.id, req.body)
            reply.send('board edited successfully')
        },
    })
}
