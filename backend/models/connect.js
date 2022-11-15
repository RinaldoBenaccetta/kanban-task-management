const mongoose = require('mongoose')
const { connection } = require('mongoose')
const dbSettings = require('./settings/dbSettings')

/**
 * Connect to the database provided in dbSettings
 * Set debug mode according to debug mode provided in dbSettings
 *
 * @returns {Promise<void>}
 */
module.exports = async () => {
    await connection(`mongodb://localhost:27017/${dbSettings.database}`)
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled

    mongoose.set('debug', dbSettings.debugMode)
}
