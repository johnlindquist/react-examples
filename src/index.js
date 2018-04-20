import React from "react"
import { render } from "react-dom"
import { TweenMax } from "gsap"

const boxStyle = {
  border: "2px solid green",
  width: 100,
  height: 100,
  margin: "1rem",
  padding: "1rem"
}

const Box = React.forwardRef((props, ref) => (
  <div style={boxStyle} ref={ref}>
    {props.children}
  </div>
))

const boxRef = React.createRef()

const rotateX = ref => () => {
  TweenMax.to(ref.current, 1, {
    rotationX: "+=360"
  })
}

const rotateY = ref => () => {
  TweenMax.to(ref.current, 1, {
    rotationY: "+=360"
  })
}

const move = ref => () => {
  TweenMax.to(ref.current, 1, {
    x: Math.random() * 100,
    y: Math.random() * 100
  })
}

render(
  <div>
    <button onClick={rotateX(boxRef)}>Rotate X</button>
    <button onClick={rotateY(boxRef)}>Rotate Y</button>
    <button onClick={move(boxRef)}>Move</button>

    <Box ref={boxRef}>
      <h2>Hello!</h2>
      <input type="text" style={{ width: "75%" }} />
      <button>Click me</button>
    </Box>
  </div>,
  document.querySelector("#root")
)
