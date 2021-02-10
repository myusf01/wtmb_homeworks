const Lodash = require('lodash')

function follow(follower,following) {
    if (isFollowing(follower,following)) {
        console.log("You're already following this follower.")
    } else {
        follower.followings.push(following.username)
        following.followers.push(follower.username)
    }


}
function unfollow(follower,following) {
    // TODO:
    // Find another and better way to find follower/following index.
    // Found loadsh library to find index.
    let followerIndex = Lodash.indexOf(follower.followings,following.username)
    // let followerIndex = follower.followings.findIndex((sen) => sen.toLowerCase() == following.username.toLowerCase())
    let followingIndex = Lodash.indexOf(following.followers,follower.username)
    // let followingIndex = following.followers.findIndex((ben) => ben.toLowerCase() == follower.username.toLowerCase())

    if (isFollowing(follower,following)) {
        follower.followings.splice(followerIndex, 1)
        following.followers.splice(followingIndex, 1)
    } else {
        console.log("You're not following this user.")
    }
}

function isFollowing(follower,follow) {
    let isFollow = false
    follower.followings.forEach(following => {
        if (follow.username == following) {
            isFollow = true
        } else {
            isFollow = false
        }
    });

    return isFollow

}


module.exports={follow,unfollow}