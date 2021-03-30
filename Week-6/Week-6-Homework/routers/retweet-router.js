const express = require('express')
const router = new express.Router()
const LikeService = require('../services/like-service')
const UserService = require('../services/user-service')
const TweetService = require('../services/tweet-service')


router.post('/:tweetID',async (req,res) =>{
    const tweetID = req.params.tweetID
    const userID = req.body.userID

    const user = await UserService.findItem(userID)
    const tweet = await TweetService.findItem(tweetID)

    await UserService.retweet(user,tweet)
  res.send()
})


router.post('/undo/:tweetID',async (req,res) =>{
    const tweetID = req.params.tweetID
    const userID = req.body.userID

    const user = await UserService.findItem(userID)
    const tweet = await TweetService.findItem(tweetID)

    await UserService.undoRetweet(user,tweet)
  res.send()
})


module.exports = router
