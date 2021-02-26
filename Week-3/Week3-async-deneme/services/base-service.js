const fs = require('fs')
const Flatted = require('Flatted')

module.exports = class Service {
    constructor(model, dbPath) {
        this.model = model
        this.dbPath = dbPath
    }

    async findAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.dbPath, 'utf8', async (err, file) => {
                // console.log("this is path"+this.dbPath);
                if (err) {
                    if (err.code == 'ENOENT') {
                        await this.saveAll([])
                        return resolve([])
                    }

                    return reject(err)
                }
                // console.log("this is model", this.model)
                const items = Flatted.parse(file).map(this.model.create)

                resolve(items)
            })
        })
    }

    createID() {
        var id = ""
        var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        for (var i = 0; i < 3; i++) {

            // random chars 
            // id += char_list.charAt(Math.floor(Math.random() * text.length)) + Math.floor((Math.random()*10)+1)

            // random numbers
            id += Math.floor((Math.random() * 100) + 1)
        }

        return id
    }

    async basicID() {
        const allItems = await this.findAll()

        const lastItem = allItems[allItems.length - 1]
        const lastItemsId = lastItem && lastItem.id || 0
        return lastItemsId + 1
    }

    async findItem(id) {

        const allItems = await this.findAll()
        return allItems.find(p => p.id == id)
    }

    async add(item) {
        const allItems = await this.findAll()
        // console.log(allItems);
        // item.id = this.createID()

        allItems.push(item)
        await this.saveAll(allItems)
        return item
    }

    // Implement del function to our code
    async del(itemId) {
        const allItems = await this.findAll()
        const itemIndex = allItems.findIndex(p => p.id == itemId)
        if (itemIndex < 0) return

        allItems.splice(itemIndex, 1)

        await this.saveAll(allItems)
    }
    async newDel(itemId,foundIndex) {
        const allItems = await this.findAll()
        // const itemIndex = allItems.findIndex(p => p.id == itemId)
        if (foundIndex < 0) return

        allItems.splice(foundIndex, 1)

        await this.saveAll(allItems)
    }

    async saveAll(items) {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.dbPath, Flatted.stringify(items), (err, file) => {
                if (err) return reject(err)
                resolve()
            })
        })
    }



    async updateService(itemID, newItem) {
        const allItems = await this.findAll()
        const currentItem = await this.findItem(itemID)
        

        // If there isn't any object that has itemID
        if (currentItem == undefined){
            return await this.add(newItem)

        }
        // if list is empty
        if (allItems.length < 1) {
            return await this.add(newItem)
        }

        // Update service with new object
        if(currentItem.id === newItem.id){
            await this.del(itemID)
            await this.add(newItem)
            return
        }else{
            console.log("Hata mesajısı...");
        }

   
    }
    async findIndexByUserID(itemID) {
        const allItems = await this.findAll()
        const foundItem = allItems.findIndex(p => p.user.id == itemID)
        if (foundItem < 0) return

        return foundItem
    }
    async findIndexByTweetID(itemID) {
        const allItems = await this.findAll()
        const foundItem = allItems.findIndex(p => p.user.id == itemID)
        if (foundItem < 0) return

        return foundItem
    }
}