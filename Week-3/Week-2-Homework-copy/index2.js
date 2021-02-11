// Current Directory in Debugger is => c:\Users\velid\JS_Yeni
// to print current directory use   => console.log('Current directory: ' + process.cwd());
// Node JS is not working fine with Windows' path naming stuctur
//  -to avoid errors you should use '\' escape char as '\/'
// TODO:
//  - Find more accurate and easier way to definde paths
//  - Find a way to change debuggers folder to current working folder.
//      - For now the solution is opening the current folder as workspace.

const Database = require('./database')
const Follow = require('./follow')
const Like = require('./like')
const User = require('./user')

Database.load('./Week-3/Week-2-Homework-copy/Yusuf.json', (err,loadedYusuf) => {
    console.log("Hello "+ loadedYusuf.username ,loadedYusuf)
})



const yusuf = User.createUser({username : 'yusuf'})


//  loadUser1 = Database.load('./Yusuf.json')
//  loadUser2 = Database.load('./Veli.json')

//  yusuf = User.createUser(loadUser1)
//  veli = User.createUser(loadUser2)


//   ali = User.createUser({username : "Ali"})
//   ali.createTweet("velidler")
//  console.log(yusuf)



//  Like.likeTweet(yusuf,veli,"646816")
//  Like.dislike(yusuf,veli,"646816")



//  Follow.follow(yusuf,veli)
//  Follow.unfollow(yusuf,veli)

//  console.log(yusuf)
//  console.log(veli)

//  yusuf.dislike(veli, 123)
//  yusuf.unfollow(veli)
//   Database.save()

//  console.log(load_yusuf.username)