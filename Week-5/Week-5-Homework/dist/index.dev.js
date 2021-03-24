"use strict";

// TODO
// 1.) Look for how to update user database
//      after tweet liked or tweeted.
var express = require('express');

var bodyParser = require('body-parser');

var UserService = require('./services/user-service');

var TweetService = require('./services/tweet-service');

var LikeService = require('./services/like-service');

var app = express();
app.use(bodyParser.json());
app.set('view engine', 'pug'); 

// TODO:
// Will add Like, Follow, Delete functions
// as endpoints to app.

// GET
// How to make two variable queries example
// app.get('/:userID/:tweetID',async (req,res) =>{
//     const tweetID = await TweetService.findItem(req.params.tweetID)
//     const userID = await UserService.findItem(req.params.userID)
//     res.render('tweet', {tweet : tweetID, user: userID})
// })

app.get('/', function _callee(req, res) {
  var tweets, users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(TweetService.findAll());

        case 2:
          tweets = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(UserService.findAll());

        case 5:
          users = _context.sent;
          res.render('index', {
            tweets: tweets,
            users: users
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.get('/user/:id', function _callee2(req, res) {
  var id, user, userTweets;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(UserService.findItem(id));

        case 3:
          user = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(TweetService.findTweetByUserID(id));

        case 6:
          userTweets = _context2.sent;
          res.render('user', {
            user: user,
            userTweets: userTweets
          });

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.get('/tweet/:id', function _callee3(req, res) {
  var id, tweet;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return regeneratorRuntime.awrap(TweetService.findItem(id));

        case 3:
          tweet = _context3.sent;
          res.render('tweet', {
            tweet: tweet
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // POST

app.post('/user', function _callee4(req, res) {
  var newUser;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(UserService.add({
            username: req.body.username,
            id: UserService.createID()
          }));

        case 2:
          newUser = _context4.sent;
          res.send(newUser);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});
app.post('/:ID/tweet', function _callee5(req, res) {
  var theUserID, theUser, newTweet;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          theUserID = req.params.ID;
          _context5.next = 3;
          return regeneratorRuntime.awrap(UserService.findItem(theUserID));

        case 3:
          theUser = _context5.sent;
          _context5.next = 6;
          return regeneratorRuntime.awrap(theUser.createTweet(req.body.text));

        case 6:
          newTweet = _context5.sent;
          res.send(newTweet);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
});
app.post('/:userID/like', function _callee6(req, res) {
  var userID, tweetID, user, theTweet;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          userID = req.params.userID;
          tweetID = req.body.id;
          _context6.next = 4;
          return regeneratorRuntime.awrap(UserService.findItem(userID));

        case 4:
          user = _context6.sent;
          _context6.next = 7;
          return regeneratorRuntime.awrap(TweetService.findItem(tweetID));

        case 7:
          theTweet = _context6.sent;
          user.likeTweet(tweetID);
          console.log(theTweet);
          res.send(theTweet);

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  });
}); // LISTEN

app.listen(3000, function (err) {
  if (err) console.log(err);
  console.log('Listening Server');
});