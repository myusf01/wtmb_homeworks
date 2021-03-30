const express = require('express')
const router = new express.Router()
const UserService = require('../services/user-service')


router.post('/:id',async (req,res) =>{
    const followerID = req.params.id
    const followingID = req.body.id

    const follower = await UserService.findItem(followerID)
    const following = await UserService.findItem(followingID)
    
    await UserService.followUser(follower,following)

    res.send(await UserService.findItem(followerID))
    

})

module.exports = router
