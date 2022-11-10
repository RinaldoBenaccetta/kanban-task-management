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
}
