import React from "react"

const userInput = (props) => {
  const style = {
    border: "3px solid black",
  }
  return (
    <div>
      <input
        style={style}
        type='text'
        onChange={props.changed}
        value={props.currentName}
      />
    </div>
  )
}

export default userInput
