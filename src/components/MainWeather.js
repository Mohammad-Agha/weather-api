import React from 'react'
import storm from "../img/weather-icons/storm.svg";
export default function MainWeather() {
    return (
        <div style={{ textAlign: 'center' }}>
            <img className="main-weather" alt="MainWeather" src={storm} />
            <p className="weather-status">overcast clouds</p>
            <p className="weather-temp"><span className="bolder">Temperature</span> <span className="from">10&deg;</span> to <span className="to">11&deg;</span>C</p>
            <p className="humidity-pressure"><span className="bolder">Humidity</span> <span className="hum">78%</span> <span className="bolder">Pressure</span>  <span className="press">1008.48</span></p>
        </div>
    )
}
