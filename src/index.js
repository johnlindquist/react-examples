import React, { Component, Fragment } from "react"
import { render } from "react-dom"

class Wrapper extends Component {
  ref = React.createRef()
  componentDidMount() {
    this.ref.current.scrollTop = this.ref.current.scrollHeight
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const wrapper = this.ref.current
    return wrapper.scrollTop + wrapper.offsetHeight >= wrapper.scrollHeight
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      this.ref.current.scrollTop = this.ref.current.scrollHeight
    }
  }

  render() {
    return (
      <div
        style={{
          height: 200,
          width: 200,
          overflowY: "scroll",
          border: "5px solid gray"
        }}
        ref={this.ref}
      >
        {this.props.children}
      </div>
    )
  }
}

const makeMessage = () =>
  String.fromCodePoint("0x1f6" + Math.floor(Math.random() * 50).toString(16))

class App extends Component {
  state = { messages: ["hello?", "hi!", makeMessage()] }

  add = () => {
    this.setState(state => ({
      messages: [...state.messages, makeMessage()]
    }))
  }

  render() {
    return (
      <Fragment>
        <Wrapper>
          {this.state.messages.map((message, i) => (
            <div
              key={i}
              style={{
                outline: "2px solid blue",
                backgroundColor: i % 2 ? "#eeeeee" : "white"
              }}
            >
              {message}
            </div>
          ))}
        </Wrapper>
        <button onClick={this.add}>+</button>
      </Fragment>
    )
  }
}

render(<App />, document.querySelector("#root"))
