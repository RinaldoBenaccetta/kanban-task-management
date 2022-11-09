const startData = require('./data/startData')
const mongoose = require('mongoose')
const dbSettings = require('./settings/dbSettings')
const { getBoardSchema } = require('../controllers/schemas/boards')

/**
 * Populate database with some fake data found in startData.js
 *
 * @returns {Promise<void>}
 */
module.exports = async () => {
    await mongoose.connect(`mongodb://localhost:27017/${dbSettings.database}`)
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled

    const BoardsSchema = new mongoose.Schema({
        name: String,
        columns: Array,
    })

    for (board of startData) {
        const boardModel = mongoose.model('Board', BoardsSchema)
        const newEntry = new boardModel(board)
        await newEntry.save()
    }

    mongoose.connection.close()
}
