import React from "react"
import { render } from "react-dom"

const names = ["Mindy", "John", "Joy"]

render(
  <div>{names.map(name => <h1>{name}</h1>)}</div>,
  document.querySelector("#root")
)
