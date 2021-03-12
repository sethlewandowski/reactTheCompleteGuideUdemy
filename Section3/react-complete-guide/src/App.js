import React, { Component } from "react"
import "./App.css"
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
      { name: "ted", age: 28 },
      { name: "aaa", age: 29 },
      { name: "beeni", age: 27 },
    ],
    showPersons: true,
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons] // copies array
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonHandler}>Show Homies</button>
        {this.state.showPersons && (
          <div>
            {this.state.persons.map((person, index) => (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default App
