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

module.exports = {
    getBoardsSchema,
    getBoardSchema,
}
