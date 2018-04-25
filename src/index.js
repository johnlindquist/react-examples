import React from "react"
import { render } from "react-dom"
import styled, {
  ThemeProvider
} from "styled-components"

const Header = styled.h1`
  color: ${props => props.theme.secondary};
`

const Span = styled.span`
  color: ${props => props.theme.primary};
`

const Button = styled.button`
  color: ${props => props.theme.primary};
  border: 5px solid
    ${props => props.theme.secondary};
`

const theme = {
  primary: "#dd33cc",
  secondary: "#1188ff"
}

render(
  <ThemeProvider theme={theme}>
    <div>
      <Header>Play with the theme colors</Header>
      <Button>My Themed Button</Button>
      <Span>It's really fun!</Span>
    </div>
  </ThemeProvider>,
  document.querySelector("#root")
)
