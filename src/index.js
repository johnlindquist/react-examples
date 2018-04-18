import React from "react"
import { render } from "react-dom"
import { Form, Text } from "react-form"

render(
  <Form>
    {formApi => (
      <form onSubmit={formApi.submitForm}>
        <Text field="hello" id="hello" />
        <button type="submit">Submit</button>
        <code>{JSON.stringify(formApi, null, " ")}</code>
      </form>
    )}
  </Form>,
  document.querySelector("#root")
)
