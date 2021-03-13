import React from "react"
import "./Person.css"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  margin: auto;
`

const person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  }

  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name}! I am {props.age} years old! Click to delete.
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </StyledDiv>
    //<div className='Person' style={style}>
  )
}

export default person

// smart component = stateful
// dumb component = no state // use as many as possible
