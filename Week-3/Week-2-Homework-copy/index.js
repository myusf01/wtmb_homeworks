const User = require('./user')
const Database = require('./database')
users = []

yusuf = new User("Yusuf")
veli = new User("Veli")
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