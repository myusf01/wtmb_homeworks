const express = require('express')
const bodyParser = require('body-parser')

const userRouter = require('./routers/user-router')
const tweetRouter = require('./routers/tweet-router')
const retweetRouter = require('./routers/retweet-router')
const likeRouter = require('./routers/like-router')
const unlikeRouter = require('./routers/unlike-router')
const followRouter = require('./routers/follow-router')
const unfollowRouter = require('./routers/unfollow-router')

const app = express()


app.use(bodyParser.json())
app.use('/user',userRouter)
app.use('/tweet',tweetRouter)
app.use('/retweet',retweetRouter)
app.use('/like', likeRouter)
app.use('/unlike', unlikeRouter)
app.use('/follow', followRouter)
app.use('/unfollow', unfollowRouter)


module.exports = app