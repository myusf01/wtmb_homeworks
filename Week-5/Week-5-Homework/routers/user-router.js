const express = require('express')
const router = new express.Router()
const UserService = require('../services/user-service')

// How to make two variable queries example
// app.get('/:userID/:tweetID',async (req,res) =>{
//     const tweetID = await TweetService.findItem(req.params.tweetID)
//     const userID = await UserService.findItem(req.params.userID)
//     res.render('tweet', {tweet : tweetID, user: userID})
// })


router.get('/user/:id', async (req, res) => {
    const id = req.params.id
    const user = await UserService.findItem(id)

    const userTweets = await TweetService.findTweetByUserID(id)

    res.render('user', {
        user,
        userTweets
    })
})


router.post('/user', async (req, res) => {
    const newUser = await UserService.add({
        username: req.body.username,
        id: UserService.createID()
    })
    res.send(newUser)

})

router.post('/:userID/like', async (req, res) => {
    const userID = req.params.userID
    const tweetID = req.body.id

    const user = await UserService.findItem(userID)
    const theTweet = await TweetService.findItem(tweetID)

    user.likeTweet(tweetID)

    res.send(theTweet)
})

module.exports = router