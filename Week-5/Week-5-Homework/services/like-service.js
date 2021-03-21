const BaseService = require('./base-service')
const LikeModel = require('../models/like')

class LikeService extends BaseService {
    model = LikeModel
    service = LikeService

    async createLike(user,tweet,like){
        user.userLikes.push(tweet)
        tweet.likes.push(like)

        await user.save()
        await tweet.save()

    }

    async dislikeTweet(user,tweet,like){
        
    }
}


module.exports = new LikeService();