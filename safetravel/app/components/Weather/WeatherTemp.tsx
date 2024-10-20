import { convertKToC } from "@/app/lib/convert";
import useWeatherStore from "@/app/stores/weatherStore";
import React from "react";

const WeatherTemp = () => {
  const { weather } = useWeatherStore()
  
  return (
    <div className="lg:w-2/5 flex flex-col items-center lg:items-start space-y-4">
      <img
        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        alt="Cloudy with Rain"
        className="w-72 lg:w-48"
      />
      <div>
        <h3 className="text-5xl font-gideonroman lg:text-6xl text-center lg:text-left">
          {convertKToC(weather?.main.temp || 0)}°
        </h3>
        <p className="text-xl ml-12 font-gideonroman text-black text-center lg:text-left">
          {weather?.weather[0].main}
        </p>
      </div>
    </div>
  );
};

export default WeatherTemp;
