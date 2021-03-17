// TODO
// 1.) Look for how to update user database
//      after tweet liked or tweeted.
const express = require('express')
const bodyParser = require('body-parser')

const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')
const LikeService = require('./services/like-service')

const userRouter = require('./routers/user-router')
const tweetRouter = require('./routers/tweet-router')

require('./mongo-connection')
const app = express()


app.use(bodyParser.json())
app.use('/user',userRouter)
app.use('/tweet',tweetRouter)

app.set('view engine', 'pug')

// TODO:
// Will add Follow, Delete functions
// as endpoints to app.

// GET



app.get('/', async (req, res) => {
    const tweets = await TweetService.findAll()
    const users = await UserService.findAll()


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