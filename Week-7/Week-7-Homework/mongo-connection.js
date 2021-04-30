const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb://localhost/twClone_1', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  console.log('Connection Established.')
}

main()
