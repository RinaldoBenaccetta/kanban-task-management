'use strict'

const prepopulateDatabase = require('../models/prepopulateDatabase')

module.exports = async function (fastify, opts) {
    fastify.get('/api/prepopulate', async function (request, reply) {
        try {
            await prepopulateDatabase()

            return "database is populated with start data's."
        } catch (err) {
            console.log('Error while populating database.')
            return 'Error while populating database.'
        }
    })
}
