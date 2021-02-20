const TweetService = require("../services/tweet-service")
const LikeService = require("../services/like-service")
// const UserService = require("../services/user-service")
const TweetModule = require("./tweet")
const like = require("./like")


module.exports = class user {

    constructor(username = '', userLikes = [], tweets = [], followers = [], followings = [], id = TweetService.createID()) {
        this.username = username
        this.id = id
        this.userLikes = userLikes
        this.tweets = tweets
        this.followers = followers
        this.followings = followings
    }

    async createTweet(text) {
        let newTweet = new TweetModule(text, this, TweetService.createID())
        this.tweets.push(newTweet)
        
        await TweetService.add(newTweet)
        // console.log(this.tweets)
    }

    async likeTweet(tweetID) {
        const theTweet = await TweetService.findItem(tweetID)
        // const allTweets = await TweetService.findAll()
        // const allLikes = await TweetService.findAll()

        if (theTweet == undefined){
            return console.log("Undefined tweet. Check tweet id.");
        }

        // Create like and push the like to tweet and user's likes.
        const newLike = new like(this,theTweet)
        
        await theTweet.likes.push(this.username)
        await this.userLikes.push(newLike)

        await TweetService.updateService(tweetID,theTweet)
        // await LikeService.updateService(tweetID, newLike)


    }


    static create({
        username,
        userLikes,
        tweets,
        followers,
        followings,
        id
    }) {
        return new user(
            username,
            userLikes,
            tweets,
            followers,
            followings,
            id
        )


    }
}



// module.exports = user