const connect = require('./connect')
const disconnect = require('./disconnect')
const getBoardsModel = require('./getBoardsModel')

/**
 * Returns the board from the database with the provided id.
 *
 * @param id
 * @returns {Promise<*>}
 */
const readBoard = async (id) => {
    await connect()

    const Boards = await getBoardsModel()

    // No argument says get all.
    // Second parameter define the fields output, here only _id and name
    const output = await Boards.findOne({
        _id: id,
    }).exec()

    disconnect()

    return output
}

module.exports = { readBoard }
