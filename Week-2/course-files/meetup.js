module.exports = class meetup {
    constructor(name) {
      this.name = name
      this.attendees = []
    }
  
    printAttendeeNames() {
      this.attendees.forEach(printName)
    }
  }