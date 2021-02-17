// const { createID } = require("../services/tweet-service")
const TweetService = require("../services/tweet-service")
const LikeService = require("../services/like-service")
const TweetModule = require("./tweet")
const like = require("./like")
import { parse,stringify } from "Flatted";


module.exports = class user {

    constructor(username = '', userLikes = [], tweets = [], followers = [], followings = [], id = null) {
        this.username = username
        this.id = TweetService.createID()
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
        let newLike =  new like(this,theTweet) 
        theTweet.likes.push(this.username)
        await this.userLikes.push(newLike)
        await LikeService.add(newLike)

        
    }


    static create({
        username,
        userLikes,
        tweets,
        followers,
        followings
    }) {
        return new user(
            username,
            userLikes,
            tweets,
            followers,
            followings
        )


    }
}



// module.exports = user