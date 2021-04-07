import test from 'ava'
import request from 'supertest'
import app from '../app'

test("Retweet a tweet", async t => {
      // Dummy user data
      const user1Data = {
        name: "Ben 1 Num.",
        username: "bn1num"
    }
    const newTweet1 = {
        tweet: "Testing tweet of User 1 has been sent. To like."
    }
    const user2Data = {
        name: "Ben 2 Num.",
        username: "bn2num"
    }

    // Create User 1
    const user1 = await request(app)
        .post('/user')
        .send(user1Data)

    t.is(user1.status, 200)

    // User 1 sends a tweet.
    const tweet1 = await request(app)
        .post(`/tweet/${user1.body._id}`)
        .send(newTweet1)
    t.is(tweet1.status, 200)

    // Create User 2
    const user2 = await request(app)
        .post('/user')
        .send(user2Data)
    t.is(user2.status, 200)

    // User 2 Retweets tweet1

    const retweet1 = await request(app)
        .post(`/retweet/${tweet1.body._id}`)
        .send({userID: user2.body._id})

    t.is(retweet1.status, 200)

    const updatedTweet1 = await request(app)
        .get(`/tweet/${tweet1.body._id}/json`)
    const updatedUser2 = await request(app)
        .get(`/user/${user2.body._id}/json`)

    t.is(tweet1.body.retweetedUsers.length < updatedTweet1.body.retweetedUsers.length,true)
    t.is(user2.body.retweets.length < updatedUser2.body.retweets.length,true)
    


    
})


