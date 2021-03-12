import React from "react"

const person = (props) => {
  return (
    <div onClick={props.click}>
      <p>
        I'm {props.name}! I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person

// smart component = stateful
// dumb component = no state // use as many as possible
