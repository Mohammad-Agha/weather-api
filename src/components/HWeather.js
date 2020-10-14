import React from 'react'
import HWeatherItem from './HWeatherItem'

export default function HWeather(props) {
    const nextHours = props.weather.map(weather => {
        return (
            <HWeatherItem
                time={weather.dt_txt.substr(11, 5)}
                temp={Math.floor(weather.main.temp - 273.15)}
            />
        )
    })
    return (
        <div className="h-weather">
            {nextHours}
        </div>
    )
}
