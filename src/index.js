import React, { Component } from "react"
import { render } from "react-dom"

const names = ["Mindy", "John", "Joy"]
const ShowName = props => <h1>{props.name}</h1>

render(
  <div>{names.map(name => <ShowName key={name} name={name} />)}</div>,
  document.querySelector("#root")
)
