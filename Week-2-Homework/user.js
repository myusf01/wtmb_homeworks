const tweet = require("./tweet")
const like = require('./like')


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



    likeTweet(accountAuthor, id) {
        let likingTweet = findTweet(accountAuthor, id);
        // console.log(likingTweet)
        let newLike = new like(accountAuthor.username, likingTweet);
        likingTweet.likes.push(this.username)
        this.userLikes.push(newLike)
        // return newLike
    }

    dislike(accountAuthor, id) {
        let likedTweet = findTweet(accountAuthor, id)

        let userLikeIndex = this.userLikes.findIndex((like) => like.tweet == likedTweet.text);
        let tweetLikeIndex = this.getLikeIndex(accountAuthor)


        if (this.isUserLike(this, likedTweet.text)) {
            this.userLikes.splice(userLikeIndex, 1)
            likedTweet.likes.splice(tweetLikeIndex, 1)
        } else {
            console.log("This post is not liked.")
        }



    }

    follow(name) {
        if (this.isFollowing(name)) {
            console.log("You're already following this user.")
        } else {
            this.followings.push(name.username)
            name.followers.push(this.username)
        }


    }
    unfollow(name) {
        // TODO:
        // Find another and better way to find follower/following index.
        let followerIndex = this.followings.findIndex((sen) => sen.username.toLowerCase() == name.username.toLowerCase())
        let followingIndex = name.followers.findIndex((ben) => ben.username.toLowerCase() == this.username.toLowerCase())

        if (this.isFollowing(name)) {
            this.followings.splice(followerIndex, 1)
            name.followers.splice(followingIndex, 1)
        } else {
            console.log("You're not following this user.")
        }
    }

    getLikeIndex(accountAuthor) {
        let authorLikeIndex;

        accountAuthor.tweets.forEach(tweet => {

            if ((this.isUserLike(this, tweet.text) && this.isTweetLiked(accountAuthor, this))) 
            {
                authorLikeIndex = tweet.likes.findIndex((like) => like == this.username)
            } else {
                authorLikeIndex = null;
            }
        });

        return authorLikeIndex
    }

    isTweetLiked(tweetAuthor, likedUser) {
        let isLikedUser = null

        tweetAuthor.tweets.forEach(tweet => {
            tweet.likes.forEach(user => {
                if (user == likedUser.username) {
                    return isLikedUser = likedUser.username

                } else {
                    return isLikedUser = null

                }
            });
        });
        return isLikedUser
    }

    isUserLike(user, id) {
        let isLike = false
        user.userLikes.forEach(like => {
            if (like.tweet == id) {
                isLike = true
            } else {
                isLike = false
            }
        });

        return isLike
    }

    isFollowing(name) {
        let isFollow = false
        this.followings.forEach(following => {
            if (name.username == following.username) {
                isFollow = true
            } else {
                isFollow = false
            }
        });

        return isFollow

    }
}


const findTweet = (user, id) => {
    user.tweets.forEach(tweet => {
        if (tweet.tweetID == id) {

            sonuc = tweet

        } else {

            sonuc = console.log("Tweet bulunamadı.")
        }

    });
    return sonuc;
}


// module.exports = {user}