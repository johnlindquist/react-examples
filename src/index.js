import React from "react"
import { render } from "react-dom"

const BasicContext = React.createContext("hello")

const App = props => <div>{props.children}</div>
const Dashboard = props => <div>{props.children}</div>

//no props here
const Avatar = () => (
  <BasicContext.Consumer>
    {context => <div>{context}</div>}
  </BasicContext.Consumer>
)

render(
  <App>
    <Dashboard>
      <Avatar />
    </Dashboard>
  </App>,
  document.querySelector("#root")
)
