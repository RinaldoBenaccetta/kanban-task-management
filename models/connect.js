const { connect, set } = require('mongoose')
const dbSettings = require('./settings/dbSettings')

/**
 * Get the database address according to the values provided
 * in the environment variables.
 * in DB_User or DB_Password are empty or undefined,
 * the address will be without credentials.
 *
 * @returns {`mongodb://${string|string}${string}`|`mongodb://${string|string}`}
 */
const getDatabaseAddress = () => {
    const user = process.env.DB_USER || ''
    const password = process.env.DB_PASSWORD || ''
    const host = process.env.DB_HOST || ''

    const credentials = user && password ? `${user}:${password}@` : ''

    return `mongodb://${credentials}${host}/${dbSettings.database}`
}

/**
 * Connect to the database provided in dbSettings
 * Set debug mode according to debug mode provided in dbSettings
 *
 * @returns {Promise<void>}
 */
module.exports = async () => {
    await connect(getDatabaseAddress())
    // await connect(`mongodb://localhost:27017/${dbSettings.database}`)
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled

    set('debug', dbSettings.debugMode)
}
