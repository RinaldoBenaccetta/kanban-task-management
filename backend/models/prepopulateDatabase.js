const startData = require('./data/startData')
const mongoose = require('mongoose')
const dbSettings = require('./settings/dbSettings')

/**
 * Populate database with some fake data found in startData.js
 *
 * @returns {Promise<void>}
 */
module.exports = async () => {
    await mongoose.connect(`mongodb://localhost:27017/${dbSettings.database}`)
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled

    const TasksSchema = new mongoose.Schema({
        name: String,
        columns: Array,
    })

    for (task of startData) {
        const taskModel = mongoose.model('Task', TasksSchema)
        const newEntry = new taskModel(task)
        await newEntry.save()
    }
}
