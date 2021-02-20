// TODO
// 1.) Look for how to update user and tweet databae
//      after tweet liked or tweeted.

const User = require('./models/user')
const Tweet = require('./models/tweet')

const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')
const LikeService = require('./services/like-service')


async function main() {
    const people = await UserService.findAll() 
    const tweets = await TweetService.findAll()
    const likes = await LikeService.findAll()

    +people[0].likeTweet('469792')

    // console.log(likes);
    console.log(tweets);

}


main()