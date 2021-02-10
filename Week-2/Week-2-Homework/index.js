const User = require('./user')
const Database = require('./database')
users = []

yusuf = new User("Yusuf")
veli = new User("Veli")

yusuf.createTweet("Im so tired laaa")

yusuf.createTweet("Im not tired")
veli.createTweet("Im fineeee")



users.push(yusuf,veli)
users.forEach(user => {
    // console.log(user)
    Database.save(user.username + ".json", user)
});

