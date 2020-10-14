import React from 'react'

export default function Header() {
    return (
        <header>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Type in a city name" />
                <button className="btn">FIND WEATHER</button>
            </div>
        </header>
    )
}