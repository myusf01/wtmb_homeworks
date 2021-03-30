module.exports = class Service {
    async findAll() {
        const found = this.model.find({})
        return found
    }

    async add(item) {
        return this.model.create(item)
    }

    // Implement del function to our code
    async del(itemId) {
        return this.model.deleteOne({
            _id: itemId
        })
    }

    async findItem(id) {

        return this.model.findById(id)

    }
}