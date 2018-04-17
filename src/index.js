import React from "react"
import { render } from "react-dom"

const Card = props => (
  <div>
    <h1>{props.header}</h1>
    <article>{props.content}</article>
  </div>
)

Card.defaultProps = {
  header: "Don't forget to add a header!",
  content: "Don't forget to add content!"
}

render(<Card content="React is fun!" />, document.querySelector("#root"))
