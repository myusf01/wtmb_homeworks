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
const Tweet = require('./tweet')
const User = require('./user')


yusuf = new User("Yusuf")
veli = new User("Veli")

// yusuf.createTweet("Im so tired laaa")

yusuf.createTweet("Im not tired", 321)
veli.createTweet("Im fineeee", 123)

yusuf.likeTweet(veli, 123)
yusuf.dislike(veli, 123)

yusuf.follow(veli)
yusuf.unfollow(veli)

console.log(yusuf)