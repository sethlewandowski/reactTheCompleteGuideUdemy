// new operators available
// spread and rest
// technically its just ...

// spread - used to split up array elements or obj props
//const newArr = [...oldArr, 1, 2]
//const newObj = {...oldObj, newProp: 5}

// rest - merge a list of function args into an array
//function sortArgs(...args){
//    return args.sort()
//}

const numbers = [1, 2, 3]
const newNums = [...numbers, 4]
console.log(newNums)

const person = {
  name: "Seth",
}

const newPerson = {
  ...person,
  age: 28,
}

console.log(newPerson)

// rest is used less often

const filter = (...args) => args.filter((x) => x === 1)
console.log(filter(1, 2, 3, 4, 5, 6))
