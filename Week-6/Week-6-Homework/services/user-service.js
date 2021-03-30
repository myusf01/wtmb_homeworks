const BaseService = require('./base-service')
const UserModel = require('../models/user')

class UserService extends BaseService {
    model = UserModel

    async getUserById(userID) {
        return this.findItem(userID)
    }

    async followUser(follower, following) {

        if ((await follower.checkIfUserFollows(following)) & (await following.checkIfFollowing(follower))) {
            console.log(await follower.checkIfUserFollows(following));
            return console.error(follower.name, " already following user!!", following.name);

        } else {
            following.followers.push(follower)
            follower.followings.push(following)
        }

        await follower.save()
        await following.save()
    }

    async unfollowUser(follower, following) {

        if ((await follower.checkIfUserFollows(following)) &
            (await following.checkIfFollowing(follower))) {


            await following.findInFollowersAndDelete(following, follower)
            await follower.findInFollowingsAndDelete(follower, following)

        } else {
            console.log("You're not following this user already.");
        }
    }

    async retweet(user, tweet) {

        if ((await user.checkIfUserRetweeted(tweet))

            &
            (await tweet.checkIfRetweetExists(user))) {

                console.log("You've already retweeted!!!");


        } else {
            user.retweets.push(tweet)
            tweet.retweetedUsers.push(user)

        }
        
        await user.save()
        await tweet.save()
    }

    async undoRetweet(user,tweet){
        if ((await user.checkIfUserRetweeted(tweet))

        &
        (await tweet.checkIfRetweetExists(user))) {
            //Undo retweet

            await user.findInRetweetsAndDelete(tweet._id,user._id)
            await tweet.findInRetweetsAndDelete(user._id,tweet._id)
                
            await user.save()
            await tweet.save()


        } else {
            console.log("You're not retweeted this tweet already!!");
        }

    }
}


module.exports = new UserService()