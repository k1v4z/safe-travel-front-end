import React from "react";

const HourlyForecast = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-gideonroman font-bold border-b-2 border-red-500 pb-2">
        Hourly forecast
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mt-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="text-center">
            <p className="font-bold font-gideonroman">{12 + index}</p>
            <img
              src="/pictures/icons/weather/sunny.png"
              alt="Weather"
              className="w-16 h-16 mx-auto"
            />
            <p className="font-gideonroman font-bold">28°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
