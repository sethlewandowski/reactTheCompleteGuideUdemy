import React, { Component } from "react"
import "./App.css"
import UserOutput from "./UserOutput/UserOutput"
import UserInput from "./UserInput/UserInput"

class App extends Component {
  state = {
    name1: "seth",
  }

  nameChangedHandler = (e) => {
    this.setState({
      name1: e.target.value,
    })
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "2px solid blue",
      padding: "8px",
      cursor: "pointer",
    }
    return (
      <div className='App'>
        <UserInput
          changed={this.nameChangedHandler}
          currentName={this.state.name1}
        />
        <UserOutput userName={this.state.name1} />
        <UserOutput userName={this.state.name1} />
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App
