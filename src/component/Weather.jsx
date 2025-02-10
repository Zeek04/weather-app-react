import React from 'react'
import "./Weather.css"
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const Weather = () => {

    const search = async () => {
        try{
            const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

            const response = await fetch();
            const data = await response.json();

        }catch(error){

        }
    }

  return (
    <div className="weather">
        <div className="search-bar">
            <input type="text" placeholder="Enter a City" name="searchBar" id="searchBar" />
            <img src={search_icon} alt="search" />
        </div>
        <img src={clear_icon} alt="" className='weather-icon'/>
        <p className='temperature'>45°F</p>
        <p className='location'>Lebanon</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="" />
                <div>
                    <p>90 %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="" />
                <div>
                    <p>40 MPH</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather