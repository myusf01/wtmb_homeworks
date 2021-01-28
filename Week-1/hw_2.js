// Classes

//     Tweet
//     User
//     Like

// Interactions

//     a User has many Tweets and can create new Tweets
//     a User can like a Tweet by creating a Like
//     each Like has one User and one Tweet
//     a Tweet can have many Likes
//     a User can have many Likes

// TODO

// 1. Add dislike.



tweet = class {

    constructor(text, user, tweetID) {
        this.text = text
        this.user = user
        this.likes = []
        this.lenLikes = this.likes.length
        this.tweetID = tweetID
        // this.tweetID = this.createID(this.text)
    }

    createID(text) {
        var id = ""
        var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        for (var i = 0; i < 3; i++) {

            // random chars 
            // id += char_list.charAt(Math.floor(Math.random() * text.length)) + Math.floor((Math.random()*10)+1)

            // random numbers
            id += Math.floor((Math.random() * 100) + 1)
        }

        return id
    }


}

user = class {

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
        let newLike = new like(this.username, likingTweet);
        likingTweet.likes.push(this)
        this.userLikes.push(newLike)
        // return newLike
    }

    dislike(accountAuthor, id) {
        let likedTweet = findTweet(accountAuthor, id)
        let userLikeIndex = this.userLikes.findIndex((like) => like.tweet.tweetID == id);
        let tweetLikeIndex = this.getLikeIndex(accountAuthor)


        if (this.isUserLike(this, id)) {
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
            this.followings.push(name)
            name.followers.push(this)
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
            if ((this.isUserLike(this, tweet.tweetID) & this.isTweetLiked(accountAuthor, this))) {
                authorLikeIndex = tweet.likes.findIndex((like) => like == this)
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
                if (user == likedUser) {
                    return isLikedUser = likedUser

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
            if (like.tweet.tweetID == id) {
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

like = class {
    constructor(user, tweet) {
        this.user = user
        this.tweet = tweet
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

yusuf = new user("Yusuf")
veli = new user("Veli")
// yusuf.createTweet("Im so tired laaa")
yusuf.createTweet("Im not tired", 321)
veli.createTweet("Im fineeee", 123)

yusuf.likeTweet(veli, 123)
yusuf.dislike(veli, 123)

yusuf.follow(veli)
yusuf.unfollow(veli)

console.log(yusuf)