const { connection } = require('mongoose')

/**
 * Disconnect from database
 */
module.exports = () => {
    connection.close()
}
