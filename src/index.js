import React, { Component } from "react"
import { render } from "react-dom"
import { TweenMax } from "gsap"

const NormalButton = React.forwardRef((props, ref) => (
  <button ref={ref} onClick={props.onClick}>
    {props.children}
  </button>
))

class App extends Component {
  buttonRef = React.createRef()

  onClick = () => {
    TweenMax.to(this.buttonRef.current, 1, {
      rotation: "+=360"
    })
  }

  render() {
    return (
      <div>
        <NormalButton ref={this.buttonRef} onClick={this.onClick}>
          Spin me!
        </NormalButton>
      </div>
    )
  }
}

render(<App />, document.querySelector("#root"))
