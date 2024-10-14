import React from "react";

const DailyForecast = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl border-b-2 font-bold font-gideonroman border-red-500 pb-2">
        Daily forecast
      </h3>
      <div className="space-y-4 mt-4">
        {["09/10", "10/10", "11/10"].map((date, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center justify-between"
          >
            <div className="text-lg text-center sm:text-left">
              <p className="font-gideonroman">
                {index === 0 ? "Today" : `Day ${index + 1}`} <br />
                <span className="text-[#979794] text-[14px]">{date}</span>
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <img
                src="/pictures/icons/weather/storm-icon.png"
                alt="Weather Icon"
                className="w-16"
              />
              <p className="text-xl font-poppins font-bold">23°</p>
            </div>
            <p className="text-lg font-gideonroman text-black text-center sm:text-left">
              Thunderstorms in some parts of the area
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
