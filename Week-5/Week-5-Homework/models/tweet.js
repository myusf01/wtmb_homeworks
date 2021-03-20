// TODO:
// Re-create Tweet Model.

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

TweetSchema.plugin(require('mongoose-autopopulate'))

const TweetModel = mongoose.model('Tweet',TweetSchema)

module.exports = TweetModel