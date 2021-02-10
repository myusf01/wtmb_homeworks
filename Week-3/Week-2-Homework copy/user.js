const tweet = require("./tweet")


module.exports = class user {

    constructor(username) {
        this.username = username
        this.userLikes = []
        this.tweets = []
        this.followers = []
        this.followings = []
    }

    createTweet(text, id) {
        let newTweet = new tweet(text, this.username, id)
        this.tweets.push(newTweet)
        console.log(this.tweets)
    }

    static create(){
         
    }
}





// module.exports = {user} 