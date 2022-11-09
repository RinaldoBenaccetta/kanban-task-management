const mongoose = require('mongoose')
const connect = require('./connect')
const disconnect = require('./disconnect')

/**
 * Returns a list with names and id of all boards.
 *
 * @returns Array<Object>
 */
module.exports = async () => {
    await connect()

    const boardsSchema = new mongoose.Schema({
        _id: String,
        name: String,
    })

    // Boards is the collection.
    const Boards = mongoose.model('Boards', boardsSchema)

    // No argument says get all.
    // Second parameter define the fields output, here only _id and name
    const output = await Boards.find({}, '_id name')

    disconnect()

    return output
}
