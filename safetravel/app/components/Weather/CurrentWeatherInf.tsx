import { formatDate } from "@/app/lib/formatDate";
import React from "react";

const CurrentWeatherInf = () => {
  
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center border-b-2 border-red-500 pb-2 text-gray-500">
      <h3 className="text-lg font-bold text-black font-gideonroman">
        Current Weather
      </h3>
      <h3 className="text-lg font-bold text-black font-gideonroman">
        {formatDate(new Date().toISOString())}
      </h3>
      <div className="text-center font-bold mt-4 lg:mt-0">
        <h3 className="mb-1 text-lg text-black font-gideonroman">
          RealFeel® 33°C
        </h3>
      </div>
    </div>
  );
};

export default CurrentWeatherInf;
