import React from "react"
import "./Person.css"

const person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  }

  return (
    <div style={style}>
      <p onClick={props.click}>
        I'm {props.name}! I am {props.age} years old! Click to delete.
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person

// smart component = stateful
// dumb component = no state // use as many as possible
