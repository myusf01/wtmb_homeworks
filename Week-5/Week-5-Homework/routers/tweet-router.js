const express = require('express')
const router = new express.Router()
const UserService = require('../services/tweet-service')


router.get('/tweet/:id', async (req, res) => {
    const id = req.params.id
    const tweet = await TweetService.findItem(id)
    res.render('tweet', {
        tweet: tweet
    })
})


router.post('/:ID/tweet', async (req, res) => {
    const theUserID = req.params.ID
    const theUser = await UserService.findItem(theUserID)

    const newTweet = await theUser.createTweet(req.body.text)
    res.send(newTweet)
})



module.exports = router
