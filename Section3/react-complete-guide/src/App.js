import React, { Component } from "react"
import "./App.css"
import Person from "./Person/Person"

class App extends Component {
  // only works in components
  state = {
    persons: [
      {
        name: "seth",
        age: 28,
      },
      {
        name: "ted",
        age: 33,
      },
      {
        name: "emily",
        age: 2,
      },
    ],
  }

  switchNameHandler = () => {
    // dont do this: this.state.persons[0].name = "seffers"
    this.setState({
      persons: [
        {
          name: "sam",
          age: 28,
        },
        {
          name: "ted",
          age: 33,
        },
        {
          name: "emily",
          age: 2,
        },
      ],
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Hi I'm a react app</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />

        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    )
  }
}

export default App
