import React from "react"
import { render } from "react-dom"
import styled from "styled-components"

const Header = styled.h1`
  border: ${props =>
    props.primary ? "3px dashed blue" : "initial"};

  color: ${props =>
    props.primary
      ? "green"
      : props.secondary
        ? "purple"
        : "initial"};
`

render(
  <div>
    <Header>A normal h1</Header>
    <Header primary>A primary h1</Header>
    <Header secondary>A secondary h1</Header>
  </div>,
  document.querySelector("#root")
)
