const app = require('./app')

// LISTEN
app.listen(3000, err => {
  if (err) console.log(err)
  console.log('Listening Server')
})
