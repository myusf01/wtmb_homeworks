const express = require('express')
const router = new express.Router()
const LikeService = require('../services/like-service')
const UserService = require('../services/user-service')
const TweetService = require('../services/tweet-service')


// Get Likes
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const like = await LikeService.findItem(id)
    res.render('like', {
        like: like
    })
})

// Create Like
router.post('/:tweetID/user/:userID', async (req, res) => {
    const userID = req.params.userID
    const tweetID = req.params.tweetID

    const user = await UserService.findItem(userID)
    const tweet = await TweetService.findItem(tweetID)
    const like = await LikeService.add({user: user, tweet: tweet})
    await LikeService.createLike(user, tweet, like)
    
    res.send(like)
})

//Dislike? Tweet
router.post('/:likeID/dislike/',async (req,res) =>{
    const likeID = req.params.likeID
    const like = await LikeService.findItem(likeID)

    const userID = like.user._id
    const tweetID = like.tweet._id

    const user = await UserService.findItem(userID)
    const tweet = await TweetService.findItem(tweetID)


    await user.findInUserLikesAndDelete(userID,tweetID)
    await tweet.findInTweetLikesAndDelete(tweetID,likeID)
    await LikeService.del(likeID)

    
    // console.log(finder);

    res.send(tweet)



})


// Delete Like
router.delete('/dislike/:id',async (req,res) =>{
    const Likeid = req.params.id
    await LikeService.del(Likeid)
    
})

module.exports = router
