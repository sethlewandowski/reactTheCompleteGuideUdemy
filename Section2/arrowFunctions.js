function myFunc() {}

const myFun = () => {
  // solves issues with using 'this' keyword
}

function printMyName(name) {
  console.log(name)
}

const printYourName = (name) => {
  console.log(name)
}
printMyName("seth")
printYourName("User")

// you have to omit the return keyword if you use one line funcitonal expression arrow
