module.exports = class tweet {

    constructor(text, user, id = null) {
        this.text = text
        this.user = user
        this.likes = []
        this.lenLikes = this.likes.length
        this.id = id
    }


    static create({
        text,
        user,
        id
    }) {
        return new tweet(text, user, id)
    }

}


// module.exports = tweet