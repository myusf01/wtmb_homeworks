const mongoose = require('mongoose')
// TODO:
// 
//  - Add Follow and Followers Lists to User Schema.

// Create service for every operation
//  - FollowService
//

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },

    username: {
        type: String,
        required: true

    },
    tweets: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Tweet',
        autopopulate: {
            maxDepth: 1
        }
    }],
    retweets: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Tweet',
        autopopulate: {
            maxDepth: 1
        }
    }],
    userLikes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Tweet'
    }],
    followers: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }],
    followings: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }]

})

UserSchema.methods.checkIfUserRetweeted = async function (tweet){
    const isExists = await UserModel.exists({retweets: tweet})
    if (isExists){
        return true
    }

    return false
}
UserSchema.methods.findInRetweetsAndDelete = async function (tweet,user){
    return await UserModel.findByIdAndUpdate(user,{
        "$pull": {
            retweets: tweet
        }
    })
}

UserSchema.methods.findInFollowersAndDelete = function (following,follower){
    return UserModel.findByIdAndUpdate(following._id,{
        "$pull": {
            followers: follower._id
        }
    })
}

UserSchema.methods.findInFollowingsAndDelete = function (follower,following){
    return UserModel.findByIdAndUpdate(follower._id,{
        "$pull": {
            followings: following._id
        }
    })
}

// Find by userID and delete the data from userLikes method.
UserSchema.methods.findInUserLikesAndDelete = async function (userID, tweetID) {
    return await UserModel.findByIdAndUpdate(userID, {
        "$pull": {
            userLikes: tweetID
        }
    })
}

// Check if user follows the following.
UserSchema.methods.checkIfUserFollows = async function (following) {
    const isExists = await UserModel.exists({followings: following})
    if (isExists) {

        return true

    }

    return false
   
}

// Check if user follows the following.
UserSchema.methods.checkIfFollowing = async function (follower) {
    const isExists = await UserModel.exists({followers: follower})

    if (isExists) {

        return true

    }
    return false

}



UserSchema.plugin(require('mongoose-autopopulate'))
const UserModel = mongoose.model('User', UserSchema)




module.exports = UserModel