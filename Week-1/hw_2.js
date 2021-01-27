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



    like_tweet(accountAuthor, id) {
        let likedTweet = findTweet(accountAuthor, id);
        console.log(likedTweet)
        let newLike = new like(this.username, likedTweet);
        accountAuthor.userLikes.push(newLike)
        // return newLike
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

    isFollowing(name) {
        let is_in = false
        this.followings.forEach(following => {
            if (name.username == following.username) {
                is_in = true
            } else {
                is_in = false
            }
        });

        return is_in

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
yusuf.like_tweet(veli, 123)
yusuf.follow(veli)
yusuf.unfollow(veli)

console.log(yusuf)