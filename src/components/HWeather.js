import React from 'react'
import HWeatherItem from './HWeatherItem'

export default function HWeather() {
    return (
        <div className="h-weather">
            <HWeatherItem time="03:00" temp="8" />
            <HWeatherItem time="06:00" temp="9" />
            <HWeatherItem time="09:00" temp="14" />
            <HWeatherItem time="12:00" temp="17" />
            <HWeatherItem time="15:00" temp="18" />
            <HWeatherItem time="18:00" temp="16" />
            <HWeatherItem time="21:00" temp="13" />
        </div>
    )
}
