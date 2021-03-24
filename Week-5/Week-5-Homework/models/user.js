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
    userLikes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Tweet'
    }]
    
})

// Find by userID and delete the data from userLikes method.
UserSchema.methods.findInUserLikesAndDelete = async function (userID,tweetID) {
    return await UserModel.findByIdAndUpdate(userID,{
        "$pull": {userLikes: tweetID}
    })
}

UserSchema.plugin(require('mongoose-autopopulate'))
const UserModel = mongoose.model('User',UserSchema)




module.exports=UserModel

//     async follow(userID) {
//         const theFollowing = await userService.findItem(userID)
//         const followingIndex = this.followings.findIndex(p => p.id == this.id);

//         if (followingIndex < 0) {
//             this.followings.push(theFollowing.username)
//             theFollowing.followers.push(this.username)

//         } else {
//             return null
//         }

//     }

