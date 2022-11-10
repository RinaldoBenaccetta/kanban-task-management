const connect = require('./connect')
const disconnect = require('./disconnect')
const getBoardsModel = require('./getBoardsModel')
const mongoose = require('mongoose')

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

module.exports = { readBoard, createBoard }
