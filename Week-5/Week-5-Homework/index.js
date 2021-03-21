// TODO:
// re-create index file keep minimum data in it.
// automatize data creation in another file or backup database
// to avoid errors and mistakes in db and code.


const express = require('express')
const flatted = require('flatted')
const bodyParser = require('body-parser')

const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')
const LikeService = require('./services/like-service')

const userRouter = require('./routers/user-router')
const tweetRouter = require('./routers/tweet-router')
const likeRouter = require('./routers/like-router')
require('./mongo-connection')
const app = express()


app.use(bodyParser.json())
app.use('/user',userRouter)
app.use('/tweet',tweetRouter)
app.use('/like', likeRouter)

app.set('view engine', 'pug')

// TODO:
// Will add Follow, Delete functions
// as endpoints to app.

// GET



app.get('/', async (req, res) => {
    const tweets = await TweetService.findAll()
    const users = await UserService.findAll()
    console.log(tweets);


    res.render('index', {
        tweets,
        users
    })
})




// LISTEN
app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log('Listening Server')
})