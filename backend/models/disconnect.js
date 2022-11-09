const mongoose = require('mongoose')

/**
 * Disconnect from database
 */
module.exports = () => {
    mongoose.connection.close()
}
