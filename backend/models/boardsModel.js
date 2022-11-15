const mongoose = require('mongoose')
const boardsSchema = require('./schemas/boardsSchema')
const dbSettings = require('./settings/dbSettings')

/**
 * Returns the model of the boards' collection.
 * Send the existing one if it exists, otherwise send a new one.
 */
module.exports = async () => {
    const Schema = new mongoose.Schema(boardsSchema)

    return (
        mongoose.models[dbSettings.boardsCollection] ||
        (await mongoose.model(dbSettings.boardsCollection, Schema))
    )
}
