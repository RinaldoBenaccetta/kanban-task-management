const mongoose = require('mongoose')
const boardsSchema = require('./schemas/boardsSchema')
const dbSettings = require('./settings/dbSettings')

/**
 * Returns the model of the boards' collection.
 * Send the existing one if it exists, otherwise send a new one.
 */
module.exports = async () => {
    // return (
    //     mongoose.models[dbSettings.boardsCollection] ||
    //     (await mongoose.model(dbSettings.boardsCollection, await getSchema()))
    // )

    const Schema = new mongoose.Schema(boardsSchema)

    return (
        mongoose.models[dbSettings.boardsCollection] ||
        (await mongoose.model(dbSettings.boardsCollection, Schema))
    )
}

/**
 * Returns the already set schema for the boards' collection.
 */
const getSchema = async () => {
    return new mongoose.Schema(boardsSchema)
}
