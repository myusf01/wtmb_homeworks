class tweet {

    constructor(text, user) {
        this.text = text
        this.user = user
        this.likes = []
        this.lenLikes = this.likes.length
        // this.tweetID = tweetID
        this.id = this.createID()
    }

    createID() {
        var id = ""
        var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        for (var i = 0; i < 3; i++) {
            id += Math.floor((Math.random() * 100) + 1)
        }
        return id
    }


    static create({text,user}){
        const tweet = new tweet({text,user})

    }
}


module.exports = tweet