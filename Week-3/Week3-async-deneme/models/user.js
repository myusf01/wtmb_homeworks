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
        // Error handling
        if (theTweet == undefined) {
            return console.log("Undefined tweet. Check tweet id.");
        }
        // Check on different likes.
        if (await LikeService.isBy(this.id) ){
            
            return console.log("You've already liked this tweet");
        }


        // Create like 
        const newLike = await new like(this, theTweet, await LikeService.basicID())

        // Push like to user arrays
        await theTweet.likes.push(this.username)
        this.userLikes.push(newLike)

        await TweetService.updateService(tweetID, theTweet)

        await LikeService.updateService(this.id, newLike)


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