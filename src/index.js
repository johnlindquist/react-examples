import React from "react"
import { render } from "react-dom"

render(
  //"demo" is just a dummy class included for this example
  <div className="demo">Use "className", not "class"!</div>,
  document.querySelector("#root")
)
