import React from "react"
import { render } from "react-dom"

const MyComponent = () => (
  <div>
    <input type="text" />
    <button>Click me</button>
  </div>
)

render(
  <div>
    <MyComponent />
  </div>
),
  document.querySelector("#root")
)
