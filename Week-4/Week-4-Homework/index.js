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

// How to make two variable queries example
// app.get('/:userID/:tweetID',async (req,res) =>{
//     const tweetID = await TweetService.findItem(req.params.tweetID)
//     const userID = await UserService.findItem(req.params.userID)

//     res.render('tweet', {tweet : tweetID, user: userID})

// })
app.get('/', async (req, res) => {
    const tweets = await TweetService.findAll()
    const users = await UserService.findAll()


    res.render('index', {
        tweets,
        users
    })
})


app.get('/user/:id', async (req, res) => {
    const id = req.params.id
    const user = await UserService.findItem(id)

    const userTweets = await TweetService.findTweetByUserID(id)

    res.render('user', {
        user,
        userTweets
    })
})


app.get('/tweet/:id', async (req, res) => {
    const id = req.params.id
    const tweet = await TweetService.findItem(id)
    res.render('tweet', {
        tweet: tweet
    })
})

app.post('/user', async (req, res) => {
    const newUser = await UserService.add({
        username: req.body.username,
        id: UserService.createID()
    })
    res.send(newUser)

})

//  "I love my yusos"
app.post('/:ID/tweet', async (req, res) => {
    const theUserID = req.params.ID
    const theUser = await UserService.findItem(theUserID)

    const newTweet = await theUser.createTweet(req.body.text)
    res.send(newTweet)
})



app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log('Listening Server')
})