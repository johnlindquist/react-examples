import React, { Component } from "react"
import { render } from "react-dom"

const URL = `https://starwars.egghead.training`

class Container extends Component {
  state = {}
  async componentDidMount() {
    const person = await fetch(`${URL}/people/${this.props.person}`).then(res =>
      res.json()
    )
    this.setState(state => ({ person }))
  }

  render() {
    return this.state.person
      ? this.props.children({
          person: this.state.person
        })
      : null
  }
}

render(
  <Container person={0}>
    {({ person }) => (
      <div>
        <h1>{person.name}</h1>
        <img src={`${URL}/${person.image}`} alt="" />
      </div>
    )}
  </Container>,
  document.querySelector("#root")
)
