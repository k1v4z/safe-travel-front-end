import { IHourlyForecast } from "@/app/interfaces/forecast";
import { convertKToC } from "@/app/lib/convert";
import useHourlyForecastStore from "@/app/stores/hourlyForecastStore";
import React from "react";

const HourlyForecast = () => {
  const { hourlyForecast } = useHourlyForecastStore();
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-gideonroman font-bold border-b-2 border-red-500 pb-2">
        Hourly forecast
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mt-4">  
        { hourlyForecast?.list && hourlyForecast?.list.slice(0,8).map((hourly: IHourlyForecast,index) => (
          <div key={index} className="text-center">
            <p className="font-bold font-gideonroman">
              {new Date(hourly.dt * 1000).getHours()}:00
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`}
              alt={hourly.weather[0].description}
              className="w-16 h-16 mx-auto"
            />
            <p className="font-gideonroman font-bold">
              {convertKToC(hourly.main.temp)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
