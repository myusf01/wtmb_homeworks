const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')
const app = require('./app')

require('./mongo-connection')

app.set('view engine', 'pug')


// GET
app.get('/', async (req, res) => {
    const tweets = await TweetService.findAll()
    const users = await UserService.findAll()
    // console.log(tweets);


    res.render('index', {
        tweets,
        users
    })
})




// LISTEN
app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log('Listening Server')
})