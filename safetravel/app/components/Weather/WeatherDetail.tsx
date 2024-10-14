import React from "react";

const WeatherDetail = () => {
  return (
    <div className="lg:w-3/5 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8 mt-6 lg:mt-0 text-xl">
      <div>
        <p className="font-gideonroman text-black">
          Maximum UV Index: 3 Moderate
        </p>
        <p className="font-gideonroman text-black">Wind: Average 6 km/h</p>
        <p className="font-gideonroman text-black">Gusts: 6 km/h</p>
        <p className="font-gideonroman text-black">Humidity: 83%</p>
        <p className="font-gideonroman text-black">Dew Point: 24°C</p>
      </div>
      <div>
        <p className="font-gideonroman text-black">Pressure: 1013 mb</p>
        <p className="font-gideonroman text-black">Cloud Density: 91%</p>
        <p className="font-gideonroman text-black">Visibility: 16 km</p>
        <p className="font-gideonroman text-black">Cloud Ceiling: 1300 m</p>
      </div>
    </div>
  );
};

export default WeatherDetail;
