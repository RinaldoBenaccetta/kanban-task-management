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

    const Board = await getBoardsModel()

    const output = await Board.findOne({
        _id: id,
    }).exec()

    disconnect()

    return output
}

/**
 * Create a new board in the database with the provided data's
 *
 * @param data
 *     "name": String,
 *     "columns": [
 *         {"name": String}
 *     ]
 *
 * @returns {Promise<void>}
 */
const createBoard = async (data) => {
    await connect()

    const Board = await getBoardsModel()

    const newBoard = new Board(data)

    await newBoard.save()

    disconnect()
}

const updateBoard = async (id, data) => {
    await connect()

    const Board = await getBoardsModel()

    const boardToUpdate = await Board.findOne({
        _id: id,
    }).exec()

    boardToUpdate.name = data.name
    boardToUpdate.columns = data.columns

    // Use save instead of updateOne because updateOne will not validate.
    // https://masteringjs.io/tutorials/mongoose/update
    // https://masteringjs.io/tutorials/mongoose/save
    // https://medium.com/@i-rebel-aj/why-you-should-avoid-using-mongoose-save-method-for-updates-cd841159a4ad
    await boardToUpdate.save()

    disconnect()
}

module.exports = { readBoard, createBoard, updateBoard }
