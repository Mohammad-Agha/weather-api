import React, { Component } from 'react'
import HWeather from './HWeather';
import MainWeather from './MainWeather';
import Loading from '../img/loading.gif'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        if (this.props.buttonClicked) {
            if (this.props.loading) {
                return <main><img src={Loading} alt="Loading" /></main>
            }

            if (this.props.error) {
                return <main>City was not found</main>
            }

            else {
                let res = []
                this.props.weathers.forEach(item => {
                    let now = new Date();
                    let time = new Date(item.dt_txt)
                    res.push({
                        main: item.main,
                        diff: Math.abs(now - time),
                        id: item.weather[0].id,
                        description: item.weather[0].description
                    })
                })
                let obj = res[0];
                res.forEach(item => {
                    if (item.diff <= obj.diff) {
                        obj = item
                    }
                })
                return (
                    <main>
                        <MainWeather weather={obj} />
                        <HWeather weather={this.props.weathers} />
                    </main>
                )
            }
        }
        return (
            <main></main>
        )
    }
}

export default Main
