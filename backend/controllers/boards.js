const connect = require('../models/connect')
const disconnect = require('../models/disconnect')
const getBoardsModel = require('../models/getBoardsModel')

/**
 * Returns a list from the database with names and id of all boards.
 *
 * @returns Array<Object>
 */
const readBoards = async () => {
    await connect()

    const Boards = await getBoardsModel()

    // No argument says get all.
    // Second parameter define the fields output, here only _id and name
    const output = await Boards.find({}, '_id name')

    disconnect()

    return output
}

module.exports = { readBoards }
