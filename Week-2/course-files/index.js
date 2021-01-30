// The index file that reads the json data.
const Database = require('./database')

const mitup = Database.load("meetup.json")

console.log(mitup.name)