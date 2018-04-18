import React, { Component } from "react"
import { render } from "react-dom"
import { MemoryRouter as Router, Route } from "react-router"
import { Link } from "react-router-dom"

const Home = () => <h1>Home Page</h1>
const About = () => <h1>About Page</h1>

render(
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>,
  document.querySelector("#root")
)
