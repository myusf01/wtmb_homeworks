const BaseService = require('./base-service')
const TweetModel = require('../models/tweet')


class TweetService extends BaseService {
    model = TweetModel

    async addTweet(user, tweetText = "") {
        const newTweet = new TweetModel({text : tweetText, user: user})
        user.tweets.push(newTweet)
        await user.save()
        await newTweet.save()

    }

                                                                                                                                                                                                                                                                            
}


module.exports = new TweetService();