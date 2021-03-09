// TODO
// 1.) Look for how to update user database
//      after tweet liked or tweeted.
const express = require('express')
const bodyParser = require('body-parser')

const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')
const LikeService = require('./services/like-service')

const app = express()
app.use(bodyParser.json())
app.set('view engine', 'pug')

app.get('/',async (req,res) =>{
    const tweets = await TweetService.findAll()
    const users = await UserService.findAll()

    res.render('index', {tweets,users})
})


app.get('/user/:id',async (req,res) =>{
    const id = req.params.id
    const user = await UserService.findItem(id)
    
    const userTweets = await TweetService.findTweetByUserID(id)

    res.render('user', {user, userTweets})
})

app.get('/tweet/:id',async (req,res) =>{
  const id = req.params.id
  const tweet = await TweetService.findItem(id)

  res.render('tweet', {tweet : tweet})
})

app.listen(3000, (err) =>{
  if (err) console.log(err);
  console.log('Listening Server')
})
