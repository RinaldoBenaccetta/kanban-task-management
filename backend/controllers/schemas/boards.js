/**
 * Fastify schema for get all boards.
 */
const getBoardsSchema = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    _id: { type: 'string' },
                    name: { type: 'string' },
                },
            },
        },
    },
}

/**
 * Fastify schema for get one board.
 */
const getBoardSchema = {
    response: {
        200: {
            type: 'object',
            properties: {
                _id: { type: 'string' },
                name: { type: 'string' },
                columns: { type: 'array' },
            },
        },
    },
}

/**
 * Fastify schema for creating one board.
 */
const postBoardSchema = {
    body: {
        type: 'object',
        additionalProperties: false,
        // additionalProperties will remove all the field that is NOT in the JSON schema
        required: ['name', 'columns'],
        properties: {
            name: { type: 'string' },
            columns: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                    },
                    required: ['name'],
                },
            },
        },
    },
}

const updateBoardSchema = {
    body: {
        type: 'object',
        additionalProperties: false,
        // additionalProperties will remove all the field that is NOT in the JSON schema
        properties: {
            name: { type: 'string' },
            columns: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        tasks: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    title: { type: 'string' },
                                    description: { type: 'string' },
                                    status: { type: 'string' },
                                    subtasks: {
                                        type: 'object',
                                        properties: {
                                            title: { type: 'string' },
                                            isCompleted: { type: 'boolean' },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    response: {
        200: {
            type: 'string',
        },
    },
}

/**
 * Fastify schema for get all boards.
 */
const deleteBoardSchema = {
    response: {
        200: {
            type: 'string',
        },
    },
}

module.exports = {
    getBoardsSchema,
    getBoardSchema,
    postBoardSchema,
    updateBoardSchema,
    deleteBoardSchema,
}
