import React from "react";

const WeatherTemp = () => {
  return (
    <div className="lg:w-2/5 flex flex-col items-center lg:items-start space-y-4">
      <img
        src="/pictures/icons//weather/cloudy-rain.png"
        alt="Cloudy with Rain"
        className="w-72 lg:w-48"
      />
      <div>
        <h3 className="text-5xl font-gideonroman lg:text-6xl text-center lg:text-left">
          27°
        </h3>
        <p className="text-xl ml-12 font-gideonroman text-black text-center lg:text-left">
          Cloudy
        </p>
      </div>
    </div>
  );
};

export default WeatherTemp;
