import React, { Component } from "react"
import "./App.css"
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 },
      { id: "4", name: "ted", age: 28 },
      { id: "5", name: "aaa", age: 29 },
      { id: "6", name: "beeni", age: 27 },
    ],
    showPersons: false,
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
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
    const style = {
      backgroundColor: "green",
      color: "white",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "pink",
        color: "black",
      },
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
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
      )

      style.backgroundColor = "red"
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "pink",
      }
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push("red") // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold") // classes = ['red', 'bold']
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Show Homies
        </button>
        {persons}
      </div>
    )
  }
}

export default App // called a higher order component
