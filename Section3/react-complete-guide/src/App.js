import React, { Component } from "react"
import "./App.css"
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { id: "20i352", name: "Max", age: 28 },
      { id: "20i32", name: "Manu", age: 29 },
      { id: "204352", name: "Stephanie", age: 26 },
      { id: "20i2", name: "ted", age: 28 },
      { id: "2352", name: "aaa", age: 29 },
      { id: "20222i352", name: "beeni", age: 27 },
    ],
    showPersons: true,
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex],
    }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
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
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default App
