import React, { Component } from "react"
import { render } from "react-dom"

class StateDemo extends Component {
  state = { count: 0 }

  onClick = () => this.setState(state => ({ count: state.count + 1 }))

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onClick}>+</button>
      </div>
    )
  }
}

render(<StateDemo />, document.querySelector("#root"))
