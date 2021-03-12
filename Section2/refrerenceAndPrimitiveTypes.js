// primitive types are num, string, bool
// when you reassign, it stores value in the new var

// for reference types like obj or arr, you reference it not copy it

const person = {
  name: "seth",
}

const secondPerson = person // this is a REFERENCE!

const newPerson = {
  ...person,
}

person.name = "doug" // person and secondperson point to the SAME object

console.log(secondPerson)

console.log(newPerson)
