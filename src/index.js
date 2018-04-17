import React, { Component } from "react"
import { render } from "react-dom"
import PropTypes from "prop-types"

const PureGreeter = props => (
  <div>
    {props.greeting}, {props.name}
  </div>
)
PureGreeter.propTypes = {
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

class Greeter extends Component {
  static propTypes = {
    greeting: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }
  render() {
    return (
      <div>
        {this.props.greeting}, {this.props.name}
      </div>
    )
  }
}

render(
  <div>
    <PureGreeter greeting="Hola" name="Mindy" />
    <Greeter greeting="Bonjour" name="John" />
  </div>,
  document.querySelector("#root")
)
