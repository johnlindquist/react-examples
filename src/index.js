import React from "react"
import { render } from "react-dom"
import styled from "styled-components"

const PasswordField = styled.input.attrs({
  type: "password",
  placeholder: "type a password"
})`
  color: red;
`

const Yoda = styled.img.attrs({
  src: "https://starwars.egghead.training/yoda.jpg"
})`
  border: 10px solid black;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

render(
  <Container>
    <PasswordField />
    <Yoda />
  </Container>,
  document.querySelector("#root")
)
