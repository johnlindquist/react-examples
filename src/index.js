import React, { Component } from "react"
import { render } from "react-dom"
import { TweenMax } from "gsap"

class App extends Component {
  buttonRef = React.createRef()

  onClick = () => {
    TweenMax.to(this.buttonRef.current, 1, {
      x: Math.random() * 100,
      y: Math.random() * 100
    })
  }

  render() {
    return (
      <div>
        <button ref={this.buttonRef} onClick={this.onClick}>
          Move me
        </button>
      </div>
    )
  }
}

render(<App />, document.querySelector("#root"))
