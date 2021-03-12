import React, { Component } from "react"
import "./App.css"
import Person from "./Person/Person"

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hi I'm a react app</h1>
        <Person name='seth' age='28' />
        <Person name='stephanie' age='30'>
          MyHobbies: racing
        </Person>
        <Person name='ted' age='5' />
      </div>
    )
  }
}

export default App
