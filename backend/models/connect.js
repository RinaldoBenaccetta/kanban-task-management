const mongoose = require('mongoose')
const dbSettings = require('./settings/dbSettings')

/**
 * Connect to the database provided in dbSettings
 *
 * @returns {Promise<void>}
 */
module.exports = async () => {
    await mongoose.connect(`mongodb://localhost:27017/${dbSettings.database}`)
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
