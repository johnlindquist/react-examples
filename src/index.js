import React from "react"
import { render } from "react-dom"

const names = ["Sal", "Kam", "Joe"]

render(
  <div>{names.map(name => <h1>{name}</h1>)}</div>,
  document.querySelector("#root")
)
