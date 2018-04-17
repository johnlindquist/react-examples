import React, { Component } from "react"
import { render } from "react-dom"

class Greeter extends Component {
  render() {
    return (
      <div>
        {this.props.greeting}, {this.props.name}
      </div>
    )
  }
}

render(
  <div>
    <Greeter greeting="Hola" name="Mindy" />
    <Greeter greeting="Bonjour" name="John" />
  </div>,
  document.querySelector("#root")
)
