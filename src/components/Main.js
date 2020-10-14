import React from 'react'
import HWeather from './HWeather';
import MainWeather from './MainWeather';
export default function Main(props) {
    return (
        <main>
            <MainWeather />
            <HWeather weather={props.weathers} />
        </main>
    )
}
