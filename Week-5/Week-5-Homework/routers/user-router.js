const express = require('express')
const router = new express.Router()
const UserService = require('../services/user-service')
const TweetService = require('../services/tweet-service')
const LikeService = require('../services/like-service')
// How to make two variable queries example
// app.get('/:userID/:tweetID',async (req,res) =>{
//     const tweetID = await TweetService.findItem(req.params.tweetID)
//     const userID = await UserService.findItem(req.params.userID)
//     res.render('tweet', {tweet : tweetID, user: userID})
// })


router.get('/:id', async (req, res) => {
    const id = req.params.id
    const user = await UserService.findItem(id)

    const userTweets = await TweetService.findItem(id)

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


// Create new user
router.post('/', async (req, res) => {
    const newUser = await UserService.add({
        username: req.body.username,
        name: req.body.name
    })
    res.send(newUser)

})

router.post('/:userID/like/:tweetID', async (req, res) => {
    const userID = req.params.userID
    const tweetID = req.params.tweetID

    const user = await UserService.findItem(userID)
    const tweet = await TweetService.findItem(tweetID)

    const like = await LikeService.add({user: userID, tweet: tweetID})
    await LikeService.createLike(user, tweet, like)
    

})

// Delete user
router.delete('/:id',async (req,res) =>{
    const userID = req.params.id 
    await UserService.del(userID)
    
})
module.exports = router