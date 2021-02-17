const User = require('./models/user')
const Tweet = require('./models/tweet')
const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')

// const Database = require('./database')
users = []


ali = User.createUser({username : "Ali"})

yusuf.createTweet("Im so tired laaa")

yusuf.createTweet("Im not tired")
veli.createTweet("Im fineeee")
ali.createTweet("Hele helee1!!")


users.push(yusuf,veli,ali)
// Database.save("users.json",users)


users.forEach(user => {
    // console.log(user)
    Database.save(user.username + ".json",user)
});


// Database.save(user.username)

async function main(){
    const yusuf = new User("Yusuf")
    const veli = new User("Veli")

    await UserService.add(yusuf)

}