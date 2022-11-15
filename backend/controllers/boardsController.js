const connect = require('../models/connect')
const disconnect = require('../models/disconnect')
const Board = require('../models/getBoardsModel')

module.exports = {
    //# create a board
    create: async (request, reply) => {
        try {
            connect()

            const board = request.body

            const BoardModel = await Board()

            // create is a shortcut for new Board(board).save()
            const newBoard = await BoardModel.create(board)

            reply.code(201).send(newBoard)
        } catch (error) {
            reply.code(500).send(error)
        } finally {
            disconnect()
        }
    },

    //#get the list of notes
    fetch: async (request, reply) => {},

    //#get a single noteNote
    get: async (request, reply) => {},

    //#update a note
    update: async (request, reply) => {},

    //#delete a note
    delete: async (request, reply) => {},
}

/**
 * Returns a list from the database with names and id of all boards.
 *
 * @returns Array<Object>
 */
const readBoards = async () => {
    await connect()

    const Boards = await Board()

    // No argument says get all.
    // Second parameter define the fields output, here only _id and name
    const output = await Boards.find({}, '_id name')

    disconnect()

    return output
}

/**
 * Returns the board from the database with the provided id.
 *
 * @param id
 * @returns {Promise<*>}
 */
const readBoard = async (id) => {
    await connect()

    const Board = await Board()

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

    const Board = await Board()

    const newBoard = new Board(data)

    await newBoard.save()

    disconnect()
}

/**
 * Updates board in the database with the provided data's
 * @param id
 * @param data
 *
 * @returns {Promise<void>}
 */
const updateBoard = async (id, data) => {
    await connect()

    const Board = await Board()

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

/**
 * Delete board with the provided id.
 * @param id
 * @returns {Promise<void>}
 */
const deleteBoard = async (id) => {
    await connect()

    const Board = await Board()

    await Board.findByIdAndDelete(id).exec()

    disconnect()
}

// module.exports = {
//     readBoard,
//     createBoard,
//     updateBoard,
//     deleteBoard,
//     readBoards,
// }
