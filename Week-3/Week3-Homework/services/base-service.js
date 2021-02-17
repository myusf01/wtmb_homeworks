const { reject } = require("lodash")
const fs = require("fs")
const Flatted = require("flatted")

module.exports = class Service {
    constructor(model, dbpath) {
        this.model = model
        this.dbpath = dbpath
    }


    async add(){

    }
    async findAll() {
        return new Promise((resolve, reject) => {
          fs.readFile(this.dbPath, 'utf8', async (err, file) => {
            if (err) {
              if (err.code == 'ENOENT') {
                await this.saveAll([])
                return resolve([])
              }
    
              return reject(err)
            }
    
            const items = Flatted.parse(file).map(this.model.create)
    
            resolve(items)
          })
        })
      }

    // syncFindTweet = (user, id) => {
    //     user.tweets.forEach(tweet => {
    //         if (tweet.tweetID == id) {
    
    //             sonuc = tweet
    
    //         } else {
    
    //             sonuc = console.log("Tweet bulunamadı.")
    //         }
    
    //     });
    //     return sonuc;
    // }

    async findItem(id) {
        const allItems = await this.findAll()
        return allItems.find(p => p.id == id)
    }
    
    async save(items) {
        return new Promise((resolve,reject) => {
            fs.writeFile(this.dbpath, Flatted.stringify(items), (err,file) => {
                if (err) return reject(err)

                resolve()
            })
        })
    }
    
}
