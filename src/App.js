import React, { Component } from "react"
import storm from "./img/weather-icons/storm.svg";
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <header>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type in a city name" />
            <button className="btn">FIND WEATHER</button>
          </div>
        </header>
        <main>
          <img className="main-weather" src={storm} />
          <p className="weather-status">overcast clouds</p>
          <p className="weather-temp"><span className="bolder">Temperature</span> <span className="from">10&deg;</span> to <span className="to">11&deg;</span>C</p>
          <p className="humidity-pressure"><span className="bolder">Humidity</span> <span className="hum">78%</span> <span className="bolder">Pressure</span>  <span className="press">1008.48</span></p>
          <div className="h-weather">
            <div className="h-weather-item">
              <span className="h-time">03:00</span>
              <img className="h-weather-img" src={storm} />
              <span className="h-weather-temp">8&deg;C</span>
            </div>
            <div className="h-weather-item">
              <span className="h-time">06:00</span>
              <img className="h-weather-img" src={storm} />
              <span className="h-weather-temp">9&deg;C</span>
            </div><div className="h-weather-item">
              <span className="h-time">09:00</span>
              <img className="h-weather-img" src={storm} />
              <span className="h-weather-temp">14&deg;C</span>
            </div><div className="h-weather-item">
              <span className="h-time">12:00</span>
              <img className="h-weather-img" src={storm} />
              <span className="h-weather-temp">17&deg;C</span>
            </div><div className="h-weather-item">
              <span className="h-time">15:00</span>
              <img className="h-weather-img" src={storm} />
              <span className="h-weather-temp">18&deg;C</span>
            </div><div className="h-weather-item">
              <span className="h-time">18:00</span>
              <img className="h-weather-img" src={storm} />
              <span className="h-weather-temp">16&deg;C</span>
            </div><div className="h-weather-item">
              <span className="h-time">21:00</span>
              <img className="h-weather-img" src={storm} />
              <span className="h-weather-temp">13&deg;C</span>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App