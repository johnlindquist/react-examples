import React from "react"
import { render } from "react-dom"
import { Form, Text } from "react-form"

const validate = value => ({
  error:
    !value || !/.*egghead.*/.test(value) ? "Type 'egghead' somewhere" : null
})

render(
  <Form validateOnMount>
    {formApi => (
      <form>
        <Text field="egghead" id="egghead" validate={validate} />
        {formApi.errors ? (
          formApi.errors.egghead ? (
            <h2>{formApi.errors.egghead}</h2>
          ) : null
        ) : null}
      </form>
    )}
  </Form>,
  document.querySelector("#root")
)
