module.exports = class like {
    constructor(user,tweet){
        this.user = user
        this.tweet = tweet
    }

    static create({user,tweet}){

        return new like(user,tweet)
    }
}