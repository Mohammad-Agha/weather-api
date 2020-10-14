import React, { Component } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App