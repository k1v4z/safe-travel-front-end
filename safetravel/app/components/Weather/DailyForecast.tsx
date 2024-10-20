import { IDailyForecast } from "@/app/interfaces/forecast";
import { convertKToC } from "@/app/lib/convert";
import useDailyForecastStore from "@/app/stores/dailyForecastStore";
import React from "react";

const DailyForecast = () => {
  const { dailyForecast } = useDailyForecastStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl border-b-2 font-bold font-gideonroman border-red-500 pb-2">
        Daily forecast
      </h3>
      <div className="space-y-4 mt-4">
        {dailyForecast?.list && dailyForecast.list.slice(0,7).map((daily: IDailyForecast, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b border-gray-200"
            >
              <div className="flex-1 text-lg text-center sm:text-left">
                <p className="font-gideonroman">
                  {index === 0 ? "Today" : `Day ${index + 1}`} <br />
                  <span className="text-[#979794] text-[14px]">
                    {new Date(daily.dt * 1000).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit'})}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2 flex-1">
                <img
                src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
                alt={daily.weather[0].description}
                className="w-16"/>
                <p className="text-xl text-center font-poppins font-bold">{convertKToC(daily.temp.day)}°C</p>
              </div>
              <p className="text-lg flex-1 font-gideonroman text-black sm:text-right">
                {daily.weather[0].description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DailyForecast;
