import React, { useState } from "react"
import "./App.css"
import Person from "./Person/Person"

// useState allows us to manage state in a functional component

const app = (props) => {
  const [persons, setPersons] = useState({
    persons: [
      {
        name: "Seth",
        age: 28,
      },
    ],
  })
  const [otherState, setOtherState] = useState({
    'message'
  })

  const switchNameHandler = () => {
    console.log("works")
  }

  return (
    <div className='App'>
      <h1>Hi I'm a react app</h1>
      <Person name={persons.persons[0].name} age={persons.persons[0].age} />

      <button onClick={switchNameHandler}>Switch Name</button>
    </div>
  )
}

export default app
