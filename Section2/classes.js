class Human {
  constructor() {
    this.gender = "male"
  }
  printGender() {
    console.log(this.gender)
  }
}

class Person extends Human {
  // now we inherit Human
  constructor() {
    super() // requred to be able to execute parent constructor
    this.name = "Seth"
    this.gender = "female"
  }
  printMyName() {
    console.log(this.name)
  }
}

const person = new Person()
person.printMyName()
person.printGender()

// classes can inherit
// inheritance is comparable to prototypes
