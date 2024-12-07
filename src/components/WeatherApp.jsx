import React from 'react'
import "./WeatherApp.css"
import search_icon from '../assets/search.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'

const WeatherApp = () => {
    return (
        <>
            <div className='weather'>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <img src={search_icon} alt="Search" />
                </div>
                <img className='weather-icon' src={clear} alt="clear" />
                <p className='temperature'>25&deg;c</p>
                <p className='location'>India</p>
                <div className="weather-data">
                    <div className="col">
                        <img src={humidity} alt="humidity" />
                        <div>
                            <p>91 %</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <img src={wind} alt="wind" />
                        <div>
                            <p>3.4 km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherApp