const connect = require('../models/connect')
const disconnect = require('../models/disconnect')
const Board = require('../models/boardsModel')
const mongoose = require('mongoose')
const startData = require('../models/data/startData')

// source for the response codes : https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/#200---299

module.exports = {
    /**
     * Create a new board in the database with the provided data's
     *
     *     "name": String,
     *     "columns": [
     *         {"name": String}
     *     ]
     *
     * @param request
     * @param reply
     * @returns {Promise<void>}
     */
    create: async (request, reply) => {
        try {
            await connect()

            const board = request.body

            const BoardModel = await Board()

            // create is a shortcut for new Board(board).save()
            const newBoard = await BoardModel.create(board)

            reply.code(201).send(newBoard)
        } catch (error) {
            reply.code(500).send(error)
        } finally {
            disconnect()
        }
    },

    /**
     * Returns a list from the database with names and id of all boards.
     *
     * @param request
     * @param reply
     * @returns {Promise<void>}
     */
    fetch: async (request, reply) => {
        try {
            await connect()

            const BoardModel = await Board()

            // No argument says get all.
            // Second parameter define the fields output, here only _id and name
            const output = await BoardModel.find({}, '_id name')

            reply.code(200).send(output)
        } catch (error) {
            reply.code(500).send(error)
        } finally {
            disconnect()
        }
    },

    /**
     * Returns the board from the database with the provided id.
     *
     * @param request
     * @param reply
     * @returns {Promise<void>}
     */
    get: async (request, reply) => {
        try {
            await connect()

            const BoardModel = await Board()

            const output = await BoardModel.findOne({
                _id: request.params.id,
            }).exec()

            reply.code(200).send(output)
        } catch (error) {
            reply.code(500).send(error)
        } finally {
            disconnect()
        }
    },

    /**
     * Updates board in the database with the provided data's
     *
     * @param request
     * @param reply
     * @returns {Promise<void>}
     */
    update: async (request, reply) => {
        try {
            await connect()

            const BoardModel = await Board()

            const boardToUpdate = await BoardModel.findOne({
                _id: request.params.id,
            }).exec()

            const data = request.body

            if (data.name) boardToUpdate.name = data.name
            if (data.columns) boardToUpdate.columns = data.columns

            // Use save instead of updateOne because updateOne will not validate.
            // https://masteringjs.io/tutorials/mongoose/update
            // https://masteringjs.io/tutorials/mongoose/save
            // https://medium.com/@i-rebel-aj/why-you-should-avoid-using-mongoose-save-method-for-updates-cd841159a4ad
            await boardToUpdate.save()

            reply.code(200).send({ data: boardToUpdate })
        } catch (error) {
            reply.code(500).send(error)
        } finally {
            disconnect()
        }
    },

    /**
     * Delete board with the provided id.
     *
     * @param request
     * @param reply
     * @returns {Promise<void>}
     */
    delete: async (request, reply) => {
        try {
            await connect()

            const BoardModel = await Board()

            await BoardModel.findByIdAndDelete(request.params.id).exec()

            reply.code(204)
        } catch (error) {
            reply.code(500).send(error)
        } finally {
            disconnect()
        }
    },

    hydrate: async (request, reply) => {
        try {
            await connect()

            const BoardsSchema = new mongoose.Schema({
                name: String,
                columns: Array,
            })

            for (let board of startData) {
                const boardModel = mongoose.model('Board', BoardsSchema)
                const newEntry = new boardModel(board)
                await newEntry.save()
            }

            reply.code(200).send('OK')
        } catch (error) {
            reply.code(500).send(error)
        } finally {
            disconnect()
        }
    },
}
