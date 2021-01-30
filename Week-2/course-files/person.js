module.exports = class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet(person) {
    var greeting = "Hello " + person.name + " my name is " + this.name;
    console.log(greeting)
    return greeting

  }
  attend(meetup) {
    this.meetup = meetup.name
    meetup.attendees.push(this)
  }
}