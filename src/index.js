import React, { Component } from "react"
import { render } from "react-dom"
import { Form, Text } from "react-form"

class App extends Component {
  state = {}

  submit = formValues => {
    this.setState(state => formValues)
  }

  render() {
    return (
      <div>
        <div>Type something then hit "Enter"</div>
        <Form onSubmit={this.submit}>
          {formApi => (
            <form onSubmit={formApi.submitForm}>
              <Text field="message" id="message" />
              <button type="submit">Submit</button>
            </form>
          )}
        </Form>
        <h1>
          You submitted{" "}
          {this.state.message ? this.state.message : " nothing yet..."}
        </h1>
      </div>
    )
  }
}

render(<App />, document.querySelector("#root"))
