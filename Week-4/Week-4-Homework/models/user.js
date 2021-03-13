const TweetService = require("../services/tweet-service")
const LikeService = require("../services/like-service")
// const UserService = require("../services/user-service")

const TweetModule = require("./tweet")
const like = require("./like")


module.exports = class user {

    constructor(username = '', userLikes = [], tweets = [], followers = [], followings = [], id = this.createID()) {
        this.username = username
        this.id = id
        this.userLikes = userLikes
        this.tweets = tweets
        this.followers = followers
        this.followings = followings
    }
    async follow(userID) {
        const theFollowing = await userService.findItem(userID)
        const followingIndex = this.followings.findIndex(p => p.id == this.id);

        if (followingIndex < 0) {
            this.followings.push(theFollowing.username)
            theFollowing.followers.push(this.username)

        } else {
            return null
        }

    }


    async createTweet(text = "") {
        const newTweet = new TweetModule(text, this, TweetService.createID())
        console.log(newTweet);
        this.tweets.push(newTweet)

        await TweetService.add(newTweet)
    }

    createID() {
        const id = TweetService.createID()
        return id
    }
    async likeTweet(tweetID) {
        console.log(tweetID);
        const theTweet = await TweetService.findItem(tweetID)
        const tweetAuthor = theTweet.user
        // Error handling
        if (theTweet == undefined) {
            return console.log("Undefined tweet. Check tweet id.");
        }
        // Check on different likes.
        if (await LikeService.findIndexByUserID(this.id)) {

            return console.log("You've already liked this tweet");
        }


        // Create like 
        const newLike = await new like(this, theTweet, await LikeService.basicID())

        // Push like to user arrays
        await theTweet.likes.push(this)
        tweetAuthor.userLikes.push(newLike)

        // Update databases
        await TweetService.updateService(tweetID, theTweet)
        await LikeService.updateService(this.id, newLike)

        // Check how to update user database by using updateService 
        // function.
        // await UserService.updateService()

    }
    async dislikeTweet(tweetID) {


        if (await LikeService.findIndexByUserID(this.id) >= 0) {
            // const dislikedTweetIndex = TweetService.findIndexByTweetID(tweetID)
            const dislikedTweet = await TweetService.findItem(tweetID)
            const dislikedTweetIndex = dislikedTweet.likes.findIndex(p => p.id === this.id)
            await dislikedTweet.likes.splice(dislikedTweetIndex, 1)


            await LikeService.newDel(tweetID, await LikeService.findIndexByUserID(this.id))
            await TweetService.updateService(tweetID, dislikedTweet)

        } else {
            return null

        }

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