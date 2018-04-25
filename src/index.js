import React from "react"
import { render } from "react-dom"

const on = true

render(
  <h1>{on ? "ON" : "OFF"}</h1>,
  document.querySelector("#root")
)
