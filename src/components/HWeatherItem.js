import React from 'react'
import storm from "../img/weather-icons/storm.svg";

export default function HWeatherItem(props) {
    return (
        <div className="h-weather-item">
            <span className="h-time">{props.time}</span>
            <img className="h-weather-img" src={storm} />
            <span className="h-weather-temp">{props.temp}&deg;C</span>
        </div>
    )
}
