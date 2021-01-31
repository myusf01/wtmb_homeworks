const Database = require('./database')
const Follow = require('./follow')
const Like = require('./like')

yusuf = Database.load("Yusuf.json")
veli = Database.load('Veli.json')

Like.likeTweet(yusuf,veli,"646816")

Follow.follow(yusuf,veli)
// console.log(yusuf)
// console.log(veli)

// yusuf.dislike(veli, 123)
// yusuf.unfollow(veli)
// // Database.save()

// console.log(load_yusuf.username)