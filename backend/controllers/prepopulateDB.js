const startData = require('../models/data/startData')
const mongoose = require('mongoose')
const connect = require('../models/connect')
const disconnect = require('../models/disconnect')

/**
 * Populate database with some fake data found in startData.js
 *
 * @returns {Promise<void>}
 */
module.exports = async () => {
    connect()

    const BoardsSchema = new mongoose.Schema({
        name: String,
        columns: Array,
    })

    for (board of startData) {
        const boardModel = mongoose.model('Board', BoardsSchema)
        const newEntry = new boardModel(board)
        await newEntry.save()
    }

    disconnect()
}
