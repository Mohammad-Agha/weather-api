import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="form-group">
                    <input
                        onChange={this.props.handleChange}
                        type="text"
                        value={this.props.value}
                        className="form-control"
                        placeholder="Type in a city name" />
                    <button onClick={this.props.handler} className="btn">FIND WEATHER</button>
                </div>
            </header >
        )
    }
}

export default Header