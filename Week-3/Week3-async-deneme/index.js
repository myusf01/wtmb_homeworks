// TODO
// 1.) Look for how to update user database
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

    // 0 velid
    // 1 yusuf

    // people[1].likeTweet('699373')
    // people[1].dislikeTweet('699373')
    
    // people[0].follow('161161')

    // console.log(likes);
    console.log(tweets);

}


main()