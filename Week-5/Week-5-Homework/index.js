// TODO:
// re-create index file keep minimum data in it.


const express = require('express')
const bodyParser = require('body-parser')

const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')


const userRouter = require('./routers/user-router')
const tweetRouter = require('./routers/tweet-router')
const likeRouter = require('./routers/like-router')
const unlikeRouter = require('./routers/unlike-router')
const followRouter = require('./routers/follow-router')
const unfollowRouter = require('./routers/unfollow-router')


require('./mongo-connection')
const app = express()


app.use(bodyParser.json())
app.use('/user',userRouter)
app.use('/tweet',tweetRouter)
app.use('/like', likeRouter)
app.use('/unlike', unlikeRouter)
app.use('/follow', followRouter)
app.use('/unfollow', unfollowRouter)



app.set('view engine', 'pug')

// GET

app.get('/', async (req, res) => {
    const tweets = await TweetService.findAll()
    const users = await UserService.findAll()
    // console.log(tweets);


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