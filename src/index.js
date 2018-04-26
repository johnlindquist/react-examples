import React from "react"
import { render } from "react-dom"

const people = [
  { name: "John", age: 36 },
  { name: "Mindy", age: 35 },
  { name: "Ben", age: 11 }
]

const ContactCard = props => (
  <div>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
  </div>
)

const App = () => (
  <div>
    {people.map(person => (
      <ContactCard {...person} />
    ))}
  </div>
)

render(<App />, document.querySelector("#root"))
