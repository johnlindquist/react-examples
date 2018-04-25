import React from "react"
import { render } from "react-dom"
import styled from "styled-components"

const HelloWorld = ({ className }) => (
  <h1 className={className}>Hi</h1>
)

const StyledHelloWorld = styled(HelloWorld)`
  color: whitesmoke;
  text-shadow: 1px 1px 1px black;
`

render(
  <div>
    <HelloWorld />
    <StyledHelloWorld />
  </div>,
  document.querySelector("#root")
)
