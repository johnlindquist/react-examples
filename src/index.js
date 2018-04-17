import React, { Component } from "react"
import { render } from "react-dom"

const names = ["Carol", "Barb", "Adam", "Devin", "Erin"]
class People extends Component {
  ascend = (a, b) => a > b
  descend = (a, b) => a < b

  state = { compare: this.ascend }

  toggleSort = () => {
    this.setState(state => ({
      compare: state.compare === this.descend ? this.ascend : this.descend
    }))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <button onClick={this.toggleSort}>
          Click to
          {this.state.compare === this.ascend ? " Descend" : " Ascend"}
        </button>
        <ul>
          {this.props.names
            .sort(this.state.compare)
            .map(name => <li key={name}>{name}</li>)}
        </ul>
      </div>
    )
  }
}

render(<People names={names} />, document.querySelector("#root"))
