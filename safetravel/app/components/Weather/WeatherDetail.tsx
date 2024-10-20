import { convertMToKm } from "@/app/lib/convert";
import { getAQIStatus, getPM25Status } from "@/app/lib/processAir";
import useAirStore from "@/app/stores/airStore";
import useWeatherStore from "@/app/stores/weatherStore";
import React from "react";

const WeatherDetail = () => {
  const { weather } = useWeatherStore()
  const { air } = useAirStore()

  return (
    <div className="lg:w-3/5 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8 mt-6 lg:mt-0 text-xl">
      <div>
        <p className="font-gideonroman text-black">
          AQI: {air?.list[0].main.aqi} {getAQIStatus(air?.list[0].main.aqi)}
        </p>
        <p className="font-gideonroman text-black">
          PM2.5: {air?.list[0].components.pm2_5} {getPM25Status(air?.list[0].components.pm2_5)}
        </p>
        <p className="font-gideonroman text-black">Wind: Average {convertMToKm(weather?.wind.speed || 0)} km/h</p>
        <p className="font-gideonroman text-black">Gusts: {
          weather?.wind.gust == undefined ? 'None' : convertMToKm(weather?.wind.gust || 0)
        }</p>
        <p className="font-gideonroman text-black">Humidity: {weather?.main.humidity}%</p>
      </div>
      <div>
        <p className="font-gideonroman text-black">Pressure: {weather?.main.pressure} mb</p>
        <p className="font-gideonroman text-black">Cloud Density: {weather?.clouds.all}%</p>
        <p className="font-gideonroman text-black">Visibility: {
          weather?.visibility == undefined ? 'None' : weather.visibility / 1000 + 'km'
        }</p>
      </div>
    </div>
  );
};

export default WeatherDetail;
