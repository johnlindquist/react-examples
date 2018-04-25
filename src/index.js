import React from "react"
import { render } from "react-dom"

const Hello = () => <h1>Hello</h1>

render(
  <div>{Hello()}</div>,
  document.querySelector("#root")
)
