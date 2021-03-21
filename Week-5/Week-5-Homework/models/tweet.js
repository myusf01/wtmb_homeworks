// TODO:
// Re-create Tweet Model.

const { text } = require('body-parser')
const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
    text: String,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        autopopulate: {
            maxDepth: 1
        }
    },
    likes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Like',
        autopopulate: {
            maxDepth: 1
        }
    }]
})

TweetSchema.index({likes: text})
TweetSchema.plugin(require('mongoose-autopopulate'))

// find by tweet id and delete the like in likes array.
 
TweetSchema.methods.findInTweetLikesAndDelete = async function (tweetID,likeID) {
    return await TweetModel.findByIdAndUpdate(tweetID,{
        "$pull": {likes: likeID}
    })
    
}

const TweetModel = mongoose.model('Tweet',TweetSchema)

module.exports = TweetModel