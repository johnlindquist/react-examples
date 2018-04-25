import React, { Component } from "react"
import { render } from "react-dom"

class Counter extends Component {
  state = { count: 1 }

  onClick = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  shouldComponentUpdate(nextProps, nextState) {
    //without this line, the `tick` prop would cause a render
    return this.state.count !== nextState.count
  }

  render() {
    return (
      <div>
        <h2>
          Last update: {new Date().toString()}
        </h2>
        <h1>{this.state.count}</h1>
        <button onClick={this.onClick}>+</button>
      </div>
    )
  }
}

class Timer extends Component {
  state = { tick: 0 }

  componentDidMount() {
    setInterval(
      () =>
        this.setState(state => ({
          tick: state.tick + 1
        })),
      1000
    )
  }

  render() {
    return this.props.children(this.state)
  }
}

render(
  <Timer>
    {({ tick }) => <Counter tick={tick} />}
  </Timer>,
  document.querySelector("#root")
)
