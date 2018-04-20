import React, { Component } from "react"
import { render } from "react-dom"

class Demo extends Component {
  state = { count: 0, name: "John" }

  //setState takes an object
  addOne = () => this.setState({ count: this.state.count + 1 })
  //or a function
  addTwo = () => this.setState(state => ({ count: state.count + 1 }))
  //and notice the "name" remains unaffected
  render() {
    return (
      <div>
        <button onClick={this.addOne}>+1</button>
        {this.state.count} {this.state.name}
        <button onClick={this.addTwo}>+2</button>
      </div>
    )
  }
}

render(<Demo />, document.querySelector("#root"))
