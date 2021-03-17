// TODO:
// Re-create Tweet Model.
module.exports = class tweet {

    constructor(text = "", user, id = null, likes = []) {
        this.text = text
        this.user = user
        this.likes = likes
        this.lenLikes = this.likes.length
        this.id = id
    }


    static create({
        text,
        user,
        id,
        likes
    }) {
        return new tweet(text, user, id, likes)
    }

}


// module.exports = tweet