const getBoardsData = require('../../models/boards')

const getBoardsHandler = async (req, reply) => {
    reply.send(await getBoardsData())
}

module.exports = { getBoardsHandler }
