import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    render() {
        return (
            <header>
                <div className="form-group">
                    <input
                        onChange={event => {
                            this.setState({
                                value: event.target.value
                            })
                        }}
                        type="text"
                        value={this.props.value}
                        className="form-control"
                        placeholder="Type in a city name" />
                    <button onClick={event => {
                        this.props.handler(this.state.value)
                    }} className="btn">FIND WEATHER</button>
                </div>
            </header >
        )
    }
}

export default Header