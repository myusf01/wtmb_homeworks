const TweetService = require("../services/tweet-service")

module.exports = class like {
    constructor(user,tweet,id= 0){
        this.user = user
        this.tweet = tweet
        this.id = id
    }

    static create({user,tweet,id}){

        return new like(user,tweet,id)
    }
}