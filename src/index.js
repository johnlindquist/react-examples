import React from "react"
import { render } from "react-dom"

const Hello = props => <h1>{props.children}</h1>

render(
  <div>
    <Hello>Hi everyone</Hello>
    <Hello>Hello</Hello>
  </div>,
  document.querySelector("#root")
)
