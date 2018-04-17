import React, { Component } from "react"
import { render } from "react-dom"

class Demo extends Component {
  render() {
    return React.Children.map(this.props.children, child => (
      <div>
        {React.cloneElement(child, {
          type: "text",
          placeholder: "type something here"
        })}
        {React.cloneElement(child, { type: "button", value: "Click me" })}
        {React.cloneElement(child, { type: "number" })}
        {React.cloneElement(child, { type: "password", value: "password" })}
      </div>
    ))
  }
}

render(
  <Demo>
    <input />
  </Demo>,
  document.querySelector("#root")
)
