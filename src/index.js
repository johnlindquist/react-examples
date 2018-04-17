import React from "react"
import { render } from "react-dom"

const JS = () => React.createElement("div", null, "JavaScript")
const JSX = () => <div>JSX</div>

render(
  <div>
    <JS />
    <JSX />
  </div>,
  document.querySelector("#root")
)
