import React, { Component } from "react"
import { render } from "react-dom"

class BugCatcher extends Component {
  state = { caughtError: false, info: "" }

  componentDidCatch(error, info) {
    this.setState(state => ({ caughtError: true, info }))
  }

  render() {
    if (this.state.caughtError) return <h2>Something went wrong 😢</h2>
    return this.props.children
  }
}

const NastyBug = () => <div>{null()}</div>

render(
  <BugCatcher>
    <NastyBug />
  </BugCatcher>,
  document.querySelector("#root")
)
