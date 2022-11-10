'use strict'

// const { getBoardsSchema } = require('../controllers/schemas/boards.js')
const {
    getBoardsSchema,
    getBoardSchema,
    postBoardSchema,
} = require('../controllers/schemas/boards.js')
const { readBoard, createBoard } = require('../models/board')
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

    fastify.post('/api/board', {
        schema: postBoardSchema,
        // params: {
        //     board: { type: 'object' },
        // },
        handler: async (req, reply) => {
            await createBoard(req.body)
            // reply.send(await createBoard(req.body))
            reply.send('Board added')
        },
    })
}

// const addPostSchema = {
//     body: {
//         type: 'object',
//         required: ['title', 'body']
//         properties: {
//             title: typeString, // recall we created typeString earlier
//             body: typeString,
//         },
//     },
//     response: {
//         200: typeString, // sending a simple message as string
//     },
// };
