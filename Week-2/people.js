Person = class {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet(person) {
    console.log("Hello " + person.name, "my name is ", this.name)
  }
  attend(meetup) {
    this.meetup = meetup
    meetup.attendees.push(this)
  }
}


Meetup = class {
  constructor(name) {
    this.name = name
    this.attendees = []
  }

  printAttendeeNames() {
    this.attendees.forEach(printName)
  }
}

printName = person => console.log(person.name)

velid = new Person("Velid", 23)
yusuf = new Person("Yusuf", 20)

velid.greet(yusuf)