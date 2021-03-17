// TODO:
// Re-create Tweet Model.

const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
    text: String,
    user: String,
    likes: []
})

TweetSchema.plugin(require('mongoose-autopopulate'))

const TweetModel = mongoose.model('Tweet',TweetSchema)

module.exports = TweetModel