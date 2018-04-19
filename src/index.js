import React, { Component } from "react"
import { render } from "react-dom"

class Counter extends Component {
  state = { count: 0 }

  componentDidMount() {
    setInterval(() => this.setState(state => ({ count: state.count + 1 })), 250)
  }

  render() {
    return this.props.children(this.state.count)
  }
}

class Multiplier extends Component {
  state = { num: 0 }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { count, by } = nextProps

    const num = count * by

    return num % 2 ? { num } : null
  }

  render() {
    return <h2>{this.state.num}</h2>
  }
}

render(
  <Counter>
    {count => (
      <div>
        {count}
        <Multiplier count={count} by={3} />
        <Multiplier count={count} by={5} />
        <Multiplier count={count} by={7} />
      </div>
    )}
  </Counter>,
  document.querySelector("#root")
)
