import React, { Component } from "react"
import { render } from "react-dom"

const URL = `https:/starwars.egghead.training`

class Container extends Component {
  state = {}
  async componentDidMount() {
    const person = await fetch(`${URL}/people/${this.props.person}`).then(res =>
      res.json()
    )
    this.setState(state => ({ person }))
  }

  render() {
    return this.props.children({
      person: this.state.person
    })
  }
}

render(
  <Container person={0}>
    {({ person }) =>
      person ? (
        <div>
          <h1>{person.name}</h1>
          <img src={`${URL}/${person.image}`} alt="" />
        </div>
      ) : null
    }
  </Container>,
  document.querySelector("#root")
)
