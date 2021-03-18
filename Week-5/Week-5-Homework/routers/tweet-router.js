const express = require('express')
const router = new express.Router()
const TweetService = require('../services/tweet-service')
const UserService = require('../services/user-service')



router.get('/:id', async (req, res) => {
    const id = req.params.id
    const tweet = await TweetService.findItem(id)
    res.render('tweet', {
        tweet: tweet
    })
})


router.post('/:Id', async (req, res) => {
    const user = await UserService.getUserById(req.params.Id)
    const tweet = req.body.tweet
    // const theUser = await UserService.findItem(theUserId)
    // const newTweet = await TweetService.createTweet(await UserService.getUserById(userId),req.body.tweet)
    await TweetService.addTweet(user,tweet)
    res.send(tweet)


})



module.exports = router
