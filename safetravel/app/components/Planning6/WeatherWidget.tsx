import React from 'react';

const WeatherWidget = () => {
  return (
    <div className="bg-slate-50 rounded-xl shadow-md p-4 flex flex-col md:flex-row justify-between items-center relative h-48 mt-3 ml-4 mr-4">

      <div className="flex items-center mb-4 md:mb-0 ml-3">
        <div className="text-7xl mt-7 font-gideonroman">27°</div>
        <div className="">
          <img
            src="/pictures/Sun cloud angled rain.png" 
            alt="Weather Icon"
            className="w-40 h-40 absolute left-28 top-4"
          />
          <div className="text-3xl absolute bottom-3 left-12 text-black font-lato">Cloudy</div>
        </div>
      </div>

        <div className="flex flex-col md:flex-row justify-between w-full md:w-auto mr-24 relative">
    {/* Nền mờ */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-slate-50 rounded-xl blur-xl opacity-50 pointer-events-none"></div>
    
    {/* Nội dung Weather Detail */}
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-7 text-base leading-10 text-black font-lato">
        <div>
        <p>
            <span className="font-semibold">Maximum UV Index:</span> 3 Moderate
        </p>
        <p>
            <span className="font-semibold">Wind:</span> Average 6 km/h
        </p>
        <p>
            <span className="font-semibold">Gusts:</span> 6 km/h
        </p>
        </div>
        <div>
        <p>
            <span className="font-semibold">Humidity:</span> 83%
        </p>
        <p>
            <span className="font-semibold">Dew Point:</span> 24° C
        </p>
        <p>
            <span className="font-semibold">Cloud Density:</span> 91%
        </p>
        </div>
        <div>
        <p>
            <span className="font-semibold">Pressure:</span> 1013 mb
        </p>
        <p>
            <span className="font-semibold">Visibility:</span> 16 km
        </p>
        <p>
            <span className="font-semibold">Cloud Ceiling:</span> 1300 m
        </p>
        </div>
    </div>
    </div>


      <div className="text-red-700 font-semibold text-base absolute top-1 left-2 font-poppins">
        Today's weather forecast is:
      </div>
      <div className="text-red-700 font-semibold text-base absolute bottom-1 right-2 font-poppins">
        suitable for the following activities
      </div>
    </div>
  );
};

export default WeatherWidget;