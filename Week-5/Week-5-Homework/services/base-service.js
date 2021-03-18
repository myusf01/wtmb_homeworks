// TODO:
// Refactor base service to use mongoDB methods to
// do operations.
const fs = require('fs')

module.exports = class Service {
    async findAll() {
        return this.model.find()
    }

    async add(item) {
        return this.model.create(item)
    }

    // Implement del function to our code
    async del(itemId) {
        return this.model.deleteOne({ _id: itemId})
    }

    async findItem(id) {

        return this.model.findById(id)

    }
}