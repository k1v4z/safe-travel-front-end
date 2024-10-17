import React from 'react'
import CurrentWeather from './CurrentWeather'
import HourlyForecast from './HourlyForecast'
import DailyForecast from './DailyForecast'

const WeatherContainer = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto p-6">
        {/* Current Weather Section */}
        <CurrentWeather/>

        {/* Hourly Forecast Section */}
        <HourlyForecast/>

        {/* Daily Forecast Section */}
        <DailyForecast/>
    </div>
  )
}

export default WeatherContainer
