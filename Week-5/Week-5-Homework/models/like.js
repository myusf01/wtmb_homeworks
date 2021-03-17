// TODO:
// Re-create or delete Like model

const mongoose = require('mongoose')

const LikeSchema = new mongoose.Schema({
    user: String,
    tweet: String
})

LikeSchema.plugin(require('mongoose-autopopulate'))
const LikeModel = mongoose.model('Like',LikeSchema)
module.exports = LikeModel
