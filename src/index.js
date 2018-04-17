import React, { Component } from "react"
import { render } from "react-dom"

class Demo extends Component {
  static Valid = props => (props.isHello ? <span>😊</span> : null)
  static Invalid = props => (props.isHello ? null : <span>😢</span>)
  static Input = props => <input type="text" onInput={props.onInput} />

  state = {
    isHello: false
  }

  onInput = event => {
    const { value } = event.target
    this.setState(state => ({
      isHello: value === "hello"
    }))
  }

  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, { ...this.state, onInput: this.onInput })
    )
  }
}

render(
  <Demo>
    <Demo.Valid />
    <Demo.Input />
    <Demo.Invalid />
  </Demo>,
  document.querySelector("#root")
)
