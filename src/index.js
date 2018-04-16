import React, { Component } from "react"
import { render } from "react-dom"

class Container extends Component {
  state = { count: 0 }
  onInc = () => this.setState(state => ({ count: state.count + 1 }))
  onDec = () => this.setState(state => ({ count: state.count - 1 }))

  render() {
    return this.props.children({
      count: this.state.count,
      onInc: this.onInc,
      onDec: this.onDec
    })
  }
}

render(
  <Container>
    {({ count, onInc, onDec }) => (
      <div>
        <button onClick={onDec}>-</button>
        <span>{JSON.stringify(count)}</span>
        <button onClick={onInc}>+</button>
      </div>
    )}
  </Container>,
  document.querySelector("#root")
)
