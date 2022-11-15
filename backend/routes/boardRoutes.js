'use strict'

const {
    getBoardsSchema,
    getBoardSchema,
    postBoardSchema,
    updateBoardSchema,
    deleteBoardSchema,
} = require('../controllers/schemas/boards.js')

const boardsController = require('../controllers/boardsController')

module.exports = async function (fastify) {
    /**
     * Add a board to the database.
     */
    fastify.post('/api/board/store', {
        schema: postBoardSchema,
        handler: boardsController.create,
    })

    /**
     * Add a board to the database.
     */
    fastify.post('/api/boards/hydrate', {
        // schema: postBoardSchema,
        handler: boardsController.hydrate,
    })

    /**
     * Returns all boards names and id
     */
    fastify.get('/api/boards', {
        schema: getBoardsSchema,
        handler: boardsController.fetch,
    })

    /**
     * returns complete board according to provide id
     */
    fastify.get('/api/board/:id', {
        schema: getBoardSchema,
        params: {
            id: { type: 'string' },
        },
        handler: boardsController.get,
    })

    /**
     * Edit a board in the database.
     */
    fastify.put('/api/board/edit/:id', {
        schema: updateBoardSchema,
        params: {
            id: { type: 'string' },
        },
        handler: boardsController.update,
    })

    /**
     * Delete a board in the database.
     */
    fastify.delete('/api/board/delete/:id', {
        schema: deleteBoardSchema,
        params: {
            id: { type: 'string' },
        },
        handler: boardsController.delete,
    })
}
