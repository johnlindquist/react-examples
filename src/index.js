import React, { Component } from "react"
import { render } from "react-dom"

const BasicContext = React.createContext()

class App extends Component {
  state = {
    message: "bonjour"
  }

  updateMessage = () => {
    this.setState(state => ({ message: "hello" }))
  }

  render() {
    return (
      <BasicContext.Provider
        value={{
          message: this.state.message,
          updateMessage: this.updateMessage
        }}
      >
        {this.props.children}
      </BasicContext.Provider>
    )
  }
}
const Dashboard = props => <div>{props.children}</div>

//no props here
const Avatar = () => (
  <BasicContext.Consumer>
    {({ message, updateMessage }) => (
      <div>
        <h1>{message}</h1>
        <button onClick={updateMessage}>Update Message</button>
      </div>
    )}
  </BasicContext.Consumer>
)

const MessageDisplay = () => (
  <BasicContext.Consumer>
    {({ message }) => (
      <h3 style={{ border: "3px solid green" }}>Message display: {message}</h3>
    )}
  </BasicContext.Consumer>
)

render(
  <App>
    <Dashboard>
      <Avatar />
      <MessageDisplay />
    </Dashboard>
  </App>,
  document.querySelector("#root")
)
