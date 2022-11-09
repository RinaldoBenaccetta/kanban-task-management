const mongoose = require('mongoose')
const dbSettings = require('./settings/dbSettings')

module.exports = async () => {
    await mongoose.connect(`mongodb://localhost:27017/${dbSettings.database}`)
}
