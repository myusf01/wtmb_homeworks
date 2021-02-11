const tweet = require("./tweet")


module.exports = class User {

    constructor(username='', userLikes = [], tweets = [], followers = [], followings = []) {
        this.username = username
        this.userLikes = userLikes
        this.tweets = tweets
        this.followers = followers
        this.followings = followings
    }

    createTweet(text) {
        let newTweet = new tweet(text, this.username)
        this.tweets.push(newTweet)
        console.log(this.tweets)
    }

    
    static createUser({username,userLikes,tweets,followers,followings}) {
        return new User(
            username,
            userLikes,
            tweets,
            followers,
            followings
        )
    }
}





// module.exports = {user} 