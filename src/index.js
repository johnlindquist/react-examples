import React, { Component } from "react"
import { render } from "react-dom"

const URL = `https://starwars.egghead.training`

class Demo extends Component {
  state = {
    loading: true,
    id: 0,
    person: null
  }

  loadNext = async () => {
    this.setState(state => ({ loading: true, id: state.id + 1 }))
    const person = await fetch(
      `${URL}/people/${this.state.id}?delay=3000` //add a 3 second delay
    ).then(res => res.json())
    this.setState(state => ({ loading: false, person }))
  }

  componentDidMount() {
    this.loadNext()
  }

  render() {
    return (
      <div>
        <button disabled={this.state.loading} onClick={this.loadNext}>
          Load Next
        </button>
        <div>
          {this.state.loading ? (
            <img
              src="https://loading.io/spinners/balls/index.circle-slack-loading-icon.svg"
              alt=""
            />
          ) : (
            <img src={`${URL}/${this.state.person.image}`} alt="" />
          )}
        </div>
      </div>
    )
  }
}

render(<Demo />, document.querySelector("#root"))
