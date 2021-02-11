class tweet {

    constructor(text, user) {
        this.text = text
        this.user = user
        this.likes = []
        this.lenLikes = this.likes.length
        // this.tweetID = tweetID
        this.tweetID = this.createID()
    }

    createID() {
        var id = ""
        var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        for (var i = 0; i < 3; i++) {

            // random chars 
            // id += char_list.charAt(Math.floor(Math.random() * text.length)) + Math.floor((Math.random()*10)+1)

            // random numbers
            id += Math.floor((Math.random() * 100) + 1)
        }

        return id
    }
}


module.exports = tweet