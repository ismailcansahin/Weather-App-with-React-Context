import React from 'react'

import CityList from './CityList'
import WeatherList from './WeatherList'

function Weather() {
  
  return (
    <div className='weather'>
        <CityList />
        <WeatherList />
    </div>
  )
}

export default Weather
