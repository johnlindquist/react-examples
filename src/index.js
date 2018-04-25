import React from "react"
import { render } from "react-dom"

const Hello = props => props.children()

render(
  <div>
    <Hello>{() => <h1>Hi everyone</h1>}</Hello>
    <Hello>{() => <h1>Hello</h1>}</Hello>
  </div>,
  document.querySelector("#root")
)
