import React from "react"
import { render } from "react-dom"

const invalid = true

render(
  <div style={{ textDecoration: invalid ? "line-through" : "underline" }}>
    Hello
  </div>,
  document.querySelector("#root")
)
