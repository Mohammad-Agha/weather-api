import React, { Component } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import './App.css'

require('dotenv').config();
console.log(process.env)


class App extends Component {
  constructor() {
    super()
    this.state = {
      value: "",
      buttonClicked: false,
      loading: false,
      weathers: [],
      error: false
    }
    this.handler = this.handler.bind(this);
  }

  handler(value) {
    this.setState({
      buttonClicked: true,
      loading: true,
      value
    });
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${value}&cnt=8&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then(data => {
        this.setState({
          error: false,
          loading: false,
          buttonClicked: true,
          weathers: data
        })
      })
      .catch(error => {
        this.setState({
          buttonClicked: true,
          error: true,
          loading: false
        })
      })
  }

  render() {
    return (
      <div className="main-div">
        <Header handler={this.handler} />
        <Main
          loading={this.state.loading}
          buttonClicked={this.state.buttonClicked}
          weathers={this.state.weathers.list}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App