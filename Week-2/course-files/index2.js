// The index file that creates our json database.


const Person = require('./person')
const Meetup = require('./meetup')
const Database = require('./database')
const Chalk = require('chalk')
const ChalkAnim = require('chalk-animation')

printName = person => console.log(person.name)

velid = new Person("Velid", 23)
yusuf = new Person("Yusuf", 20)

wtmb = new Meetup("WTM Berlin")
yusuf.attend(wtmb)
velid.attend(wtmb)


Database.save("meetup.json",wtmb)

// const mitup = Database.load("meetup.json")

// console.log(mitup.name)


