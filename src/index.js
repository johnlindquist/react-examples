import React from "react"
import { render } from "react-dom"

const On = () => <div>On</div>
const Off = () => <div>Off</div>

const App = props => (props.on ? <On /> : <Off />)

render(<App on />, document.querySelector("#root"))
