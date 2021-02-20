const fs = require('fs')
const Flatted = require('Flatted')
const { resolve } = require('path')


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

    async basicID(){
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
        console.log(allItems);
        // item.id = this.createID()

        allItems.push(item)
        await this.saveAll(allItems)
        return item
    }

    // Implement del function to our code
    async  del(itemId) {
        const allItems = await this.findAll()
        const itemIndex = allItems.findIndex(p => p.id == itemId)
        if (itemIndex < 0) return
    
        allItems.splice(itemIndex, 1)
    
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
    async indexFind(itemID){
        const allItems = await this.findAll()
        
        return allItems.findIndex(p => p.id == itemID)
    }

    async updateService(itemID,obj){
        const allItems = await this.findAll()

        for (let index = 0; index < allItems.length; index++) {
            const item = allItems[index];
            if (item.id === itemID){
                await this.del(itemID)
                return await this.add(obj)
            }
        }

    }

}