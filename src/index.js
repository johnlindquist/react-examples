import React from "react"
import { render } from "react-dom"
import styled from "styled-components"

const Container = styled.div`
  padding: 3rem;
  background-color: whitesmoke;
  border: 2px solid gray;
`

const Header = styled.h1`
  ${Container}:hover & {
    color: green;
  }
`

render(
  <div>
    <Container>
      <h1>Hover anywhere in the container</h1>
      <Header>
        I respond to my parents' hover
      </Header>
    </Container>
  </div>,
  document.querySelector("#root")
)
