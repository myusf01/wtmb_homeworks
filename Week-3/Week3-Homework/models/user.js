const tweet = require("./tweet")
const like = require("./like")
const { findItem } = require("../services/user-service")


module.exports = class User {

    constructor(username='', userLikes = [], tweets = [], followers = [], followings = [], id) {
        this.username = username
        this.id = id
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

    likeTweet(tweetAuthor, tweetID){

        let likingTweet = findItem(tweetID);
        let newLike = new like(tweetAuthor.username, likingTweet);
    
        likingTweet.likes.push(user.username)
        this.userLikes.push(newLike)
    }
    
    async dislike(likedBy,liked, tweet_id) {
        let likedTweet = findTweet(liked, tweet_id)
    
        // let userLikeIndex = Lodash.indexOf(likedBy.userLikes.forEach(like => {if (like.tweet==likedTweet.text) like.tweet}),likedTweet.text)
        let userLikeIndex = likedBy.userLikes.findIndex((like) => like.tweet == likedTweet.text);
        let tweetLikeIndex = getLikeIndex(likedBy,liked)
    
    
        if (isUserLike(likedBy, likedTweet.text)) {
            likedBy.userLikes.splice(userLikeIndex, 1)
            likedTweet.likes.splice(tweetLikeIndex, 1)
        } else {
            console.log("This post is not liked.")
        }
    }

    static create({username,userLikes,tweets,followers,followings}) {
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