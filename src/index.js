import React, { Component } from "react"
import { render } from "react-dom"

class Mouse extends Component {
  state = { x: 0, y: 0 }

  onMouseMove = event => {
    const { x, y } = event.nativeEvent
    this.setState({ x, y })
  }

  render() {
    return this.state ? (
      <div onMouseMove={this.onMouseMove}>
        {this.props.children(this.state)}
      </div>
    ) : null
  }
}

render(
  <Mouse>
    {({ x, y }) => (
      <div
        style={{ width: "200px", height: "200px", backgroundColor: "yellow" }}
      >
        x: {x} y: {y}
      </div>
    )}
  </Mouse>,
  document.querySelector("#root")
)
