import React, { Component } from "react"
import { render } from "react-dom"

const URL = `https://starwars.egghead.training`

class Demo extends Component {
  state = { side: "left", date: new Date() }

  select = side => event => {
    this.setState(
      //null prevents rendering
      state => (state.side === side ? null : { side, date: new Date() })
    )
  }

  render() {
    return (
      <div>
        <h1>{this.state.side}</h1>
        <h2>Don't render unless you click a different button</h2>

        <button onClick={this.select("left")}>Left</button>
        <button onClick={this.select("right")}>Right</button>
        <h1>{this.state.date.toString()}</h1>
      </div>
    )
  }
}

render(<Demo />, document.querySelector("#root"))
