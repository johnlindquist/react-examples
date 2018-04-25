import React from "react"
import { render } from "react-dom"
import styled from "styled-components"

const Header = styled.h1`
  color: red;
  font-weight: bold;
`

const ShadowyHeader = Header.extend`
  text-shadow: 1px 1px 5px black;
`

render(
  <div>
    <Header>This is a Header</Header>
    <ShadowyHeader>I love shadows</ShadowyHeader>
  </div>,
  document.querySelector("#root")
)
