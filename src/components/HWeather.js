import React, { Component } from 'react'
import HWeatherItem from './HWeatherItem'
import clear from "../img/weather-icons/clear.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";

class HWeather extends Component {
    constructor(props) {
        super(props)
        this.setState = {}
    }

    render() {
        const nextHours = this.props.weather.map(weather => {
            const id = weather.weather[0].id
            let img;
            if (id < 300) {
                img = storm
            }
            else if (id < 500) {
                img = drizzle
            }
            else if (id < 600) {
                img = rain
            }
            else if (id < 700) {
                img = snow
            }
            else if (id < 800) {
                img = fog
            }
            else if (id === 800) {
                img = clear
            }
            else if (id === 801) {
                img = partlycloudy
            }
            else if (id < 806) {
                img = mostlycloudy
            }
            else {
                img = unknown
            }

            return (
                <HWeatherItem
                    key={Math.random()}
                    time={weather.dt_txt.substr(11, 5)}
                    temp={Math.floor(weather.main.temp)}
                    img={img}
                />
            )
        })
        return (
            <div className="h-weather">
                {nextHours}
            </div>
        )
    }
}

export default HWeather
