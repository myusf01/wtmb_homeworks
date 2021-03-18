const express = require('express')
const router = new express.Router()
const UserService = require('../services/user-service')

// How to make two variable queries example
// app.get('/:userID/:tweetID',async (req,res) =>{
//     const tweetID = await TweetService.findItem(req.params.tweetID)
//     const userID = await UserService.findItem(req.params.userID)
//     res.render('tweet', {tweet : tweetID, user: userID})
// })


router.get('/:id', async (req, res) => {
    const id = req.params.id
    const user = await UserService.findItem(id)

    const userTweets = await TweetService.findTweetByUserID(id)

    res.render('user', {
        user,
        userTweets
    })
})

router.get('/', async (req, res) => {
    const user = await UserService.findAll()
    res.render('user', {
        user
    })
})


router.post('/', async (req, res) => {
    const newUser = await UserService.add({
        username: req.body.username,
        name: req.body.name
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

router.delete('/:id',async (req,res) =>{
    const userID = req.params.id 
    await UserService.del(userID)
    
})
module.exports = router