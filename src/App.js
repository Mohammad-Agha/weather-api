import React, { Component } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import FakeWeather from './fakeWeatherData.json';
import './App.css'


class App extends Component {
  constructor() {
    super()
    let weathers = FakeWeather.list.slice(0, 8);
    this.state = {
      weathers
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main weathers={this.state.weathers} />
      </div>
    )
  }
}

export default App