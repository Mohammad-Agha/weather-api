import React from 'react'

export default function HWeatherItem(props) {
    return (
        <div key={Math.random()} className="h-weather-item">
            <span className="h-time">{props.time}</span>
            <img className="h-weather-img" alt="Main-Weather-Item" src={props.img} />
            <span className="h-weather-temp">{props.temp}&deg;C</span>
        </div>
    )
}
