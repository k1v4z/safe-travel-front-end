import React from "react";
import CurrentWeatherInf from "./CurrentWeatherInf";
import WeatherTemp from "./WeatherTemp";
import WeatherDetail from "./WeatherDetail";

const CurrentWeather = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <CurrentWeatherInf/>

      <div className="flex flex-col lg:flex-row mt-4">
        {/* Weather Icon and Temp */}
        <WeatherTemp/>

        {/* Weather Details */}
        <WeatherDetail/>
      </div>
    </div>
  );
};

export default CurrentWeather;
