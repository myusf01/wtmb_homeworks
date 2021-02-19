// TODO
// 1.) Look for how to update user and tweet databae
//      after tweet liked or tweeted.

const User = require('./models/user')
const Tweet = require('./models/tweet')

const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')
const LikeService = require('./services/like-service')


async function main() {
    // const yusuf = new User('Yusuf')
    // const velid = new User('Velid')

    // await UserService.add(velid)
    // await UserService.add(yusuf)
    const people = await UserService.findAll()


    // await people[0].createTweet("Deneme")
    // await people[1].createTweet("async ol artık!")  
    const tweets = await TweetService.findAll()
    // await UserService.del('668753')
    // people[0].likeTweet('88589')

    const likes = await LikeService.findAll()
    // console.log(likes);
    console.log(tweets);

}


main()