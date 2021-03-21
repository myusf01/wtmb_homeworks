const express = require('express')
const router = new express.Router()
const TweetService = require('../services/tweet-service')
const UserService = require('../services/user-service')


// Get tweets
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const tweet = await TweetService.findItem(id)
    res.render('tweet', {
        tweet: tweet
    })
})

// Create tweet
router.post('/:id', async (req, res) => {
    const user = await UserService.findItem(req.params.id)
    const tweet = req.body.tweet
    // const theUser = await UserService.findItem(theUserid)
    // const newTweet = await TweetService.createTweet(await UserService.getUserByid(userid),req.body.tweet)
    await TweetService.addTweet(user,tweet)

    await res.send(tweet)


})

// Delete tweet
router.delete('/:id',async (req,res) =>{
    const tweetid = req.params.id
    await TweetService.del(tweetid)
})

module.exports = router
