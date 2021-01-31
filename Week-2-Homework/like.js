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

function dislike(user,accountAuthor, id) {
    let likedTweet = findTweet(accountAuthor, id)

    let userLikeIndex = user.userLikes.findIndex((like) => like.tweet == likedTweet.text);
    let tweetLikeIndex = getLikeIndex(accountAuthor)


    if (isUserLike(user, likedTweet.text)) {
        user.userLikes.splice(userLikeIndex, 1)
        likedTweet.likes.splice(tweetLikeIndex, 1)
    } else {
        console.log("This post is not liked.")
    }



}



function getLikeIndex(user,accountAuthor) {
    let authorLikeIndex;

    accountAuthor.tweets.forEach(tweet => {

        if ((isUserLike(user, tweet.text) && isTweetLiked(accountAuthor, user))) {
            authorLikeIndex = tweet.likes.findIndex((like) => like == user.username)
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
    dislike
}