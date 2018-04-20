import React, { Component } from "react"
import { render } from "react-dom"

const { Consumer, Provider } = React.createContext()

const DisplayConsumer = () => (
  <Consumer>
    {context => <div>{context}</div>}
  </Consumer>
)

render(
  <Provider value={"root"}>
    <DisplayConsumer />
    <div>
      <div style={{ margin: "2rem" }}>
        <Provider value={"nested"}>
          <DisplayConsumer />
        </Provider>
      </div>
    </div>
  </Provider>,
  document.querySelector("#root")
)
