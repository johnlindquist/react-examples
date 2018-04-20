import React, { Component } from "react"
import { render } from "react-dom"

class App extends Component {
  componentWillReceiveProps() {}

  render() {
    return <div>Hi</div>
  }
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
)
