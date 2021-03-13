import React from "react"
import Person from "./Person/Person"

const Persons = (props) =>
  props.persons.map((person, index) => {
    ;<Person />
  })

export default Persons
