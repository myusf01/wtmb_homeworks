const likeService = require("../services/like-service")

module.exports = class like {
    constructor(user,tweet,id=this.likeID()){
        this.user = user
        this.tweet = tweet
        this.id = id
    }

    async likeID() {
        const allItems = await likeService.findAll()

        const lastItem = allItems[allItems.length - 1]
        const lastItemsId = lastItem && lastItem.id || 0
        return lastItemsId + 1
    }
    static create({user,tweet,id}){

        return new like(user,tweet,id)
    }
}