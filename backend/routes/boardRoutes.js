'use strict'

const {
    getBoardsSchema,
    getBoardSchema,
    postBoardSchema,
    updateBoardSchema,
    deleteBoardSchema,
} = require('../controllers/schemas/boards.js')
const {
    readBoard,
    readBoards,
    createBoard,
    updateBoard,
    deleteBoard,
} = require('../controllers/boardsController')

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

    /**
     * Add a board to the database.
     */
    fastify.post('/api/board/store', {
        schema: postBoardSchema,
        handler: async (req, reply) => {
            await createBoard(req.body)
            reply.send('Board added successfully')
        },
    })

    /**
     * Edit a board in the database.
     */
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

    /**
     * Delete a board in the database.
     */
    fastify.delete('/api/board/delete/:id', {
        schema: deleteBoardSchema,
        params: {
            id: { type: 'string' },
        },
        handler: async (req, reply) => {
            await deleteBoard(req.params.id, reply)
            reply.send('board successfully deleted')
        },
    })
}
