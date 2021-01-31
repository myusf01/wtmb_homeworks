function follow(user,name) {
    if (isFollowing(user,name)) {
        console.log("You're already following this user.")
    } else {
        user.followings.push(name.username)
        name.followers.push(user.username)
    }


}
function unfollow(user,name) {
    // TODO:
    // Find another and better way to find follower/following index.
    let followerIndex = user.followings.findIndex((sen) => sen.toLowerCase() == name.username.toLowerCase())
    let followingIndex = name.followers.findIndex((ben) => ben.toLowerCase() == user.username.toLowerCase())

    if (isFollowing(user,name)) {
        user.followings.splice(followerIndex, 1)
        name.followers.splice(followingIndex, 1)
    } else {
        console.log("You're not following this user.")
    }
}

function isFollowing(user,name) {
    let isFollow = false
    user.followings.forEach(following => {
        if (name.username == following) {
            isFollow = true
        } else {
            isFollow = false
        }
    });

    return isFollow

}


module.exports={follow,unfollow}