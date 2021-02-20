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

        // allTweets.forEach(async tweet => {
        //     console.log(tweet);
        //     if (tweet.id == tweetID){
        //         await TweetService.del(tweetID)

        //     }
        // });
        
        // allLikes.forEach(async like => {
        //     if (like.tweet.id == tweetID){
        //         await LikeService.del(tweetID)
        //     }
        // });



        // TweetService[findID] = theTweet
        // console.log(TweetService[findID]);

        // Create like and push the like to tweet and user's likes.
        let newLike =  new like(this,theTweet)
        await theTweet.likes.push(this.username)
        await this.userLikes.push(newLike)

        // // Add like to like databases.
        // await LikeService.add(newLike)
        // await TweetService.add(theTweet)
        
        await TweetService.updateService(tweetID,newLike)
        await LikeService.updateService(tweetID, theTweet)
        // await TweetService.updateService()
        // let updatedTweets = await TweetService.findAll()

        // await TweetService.saveAll(updatedTweets)
        // await UserService.saveAll(UserService.findAll())

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