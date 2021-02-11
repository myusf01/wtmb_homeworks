const Lodash = require('lodash')
class like {
    constructor(user, tweet) {
        this.user = user
        this.tweet = tweet.text
    }
}





function likeTweet(user,accountAuthor, id) {
    let likingTweet = findTweet(accountAuthor, id);
    // console.log(likingTweet)
    let newLike = new like(accountAuthor.username, likingTweet);
    likingTweet.likes.push(user.username)
    user.userLikes.push(newLike)
    // return newLike
}

function dislike(likedBy,liked, tweet_id) {
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



function getLikeIndex(likedBy,tweetedUser) {
    let authorLikeIndex;
    tweetedUser.tweets.forEach(tweet => {

        if ((isUserLike(likedBy, tweet.text) && isTweetLiked(tweetedUser, likedBy))) {
            authorLikeIndex = tweet.likes.findIndex((like) => like == likedBy.username)
        } else {
            authorLikeIndex = null;
        }
    });

    return authorLikeIndex
}

function isTweetLiked(tweetAuthor, likedUser) {
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

function isUserLike(user, id) {
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




module.exports = {
    like,
    likeTweet,
    dislike,
    findTweet
}