import React from "react";

interface WeatherWidget {
  temperature: number;
  windSpeed: number;
  humidity: number;
  weatherCondition: string;
  deg: number;
  pressure: number;
  icon: string
}

interface WeatherWidgetProps {
  weather: WeatherWidget;
}

const WeatherWidget = ({ weather }: WeatherWidgetProps) => {
  return (
    <div className="bg-slate-50 rounded-xl shadow-md p-4 flex flex-col md:flex-row justify-between items-center relative h-48 mt-3 ml-4 mr-4">
      <div className="flex items-center mb-4 md:mb-0 ml-3">
        <div className="text-7xl mt-7 font-gideonroman">
          {weather.temperature}°
        </div>
        <div className="">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="Weather Icon"
            className="w-40 h-40 absolute left-34 top-4"
          />
          <div className="text-3xl absolute bottom-3 left-12 text-black font-lato">
            {weather.weatherCondition}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full md:w-auto mr-24 relative">
        {/* Nền mờ */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-slate-50 rounded-xl blur-xl opacity-50 pointer-events-none"></div>

        {/* Nội dung Weather Detail */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-7 text-base leading-10 text-black font-lato">
          <div>
            <p>
              <span className="font-semibold">Wind:</span> Average{" "}
              {weather.windSpeed} km/h
            </p>
            <p>
              <span className="font-semibold">Humidity:</span>{" "}
              {weather.humidity}%
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Deg:</span> {weather.deg}°
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Pressure:</span>{" "}
              {weather.pressure} mb
            </p>
          </div>
        </div>
      </div>

      <div className="text-red-700 font-semibold text-base absolute top-1 left-2 font-poppins">
        With weather forecast:
      </div>
      <div className="text-red-700 font-semibold text-base absolute bottom-1 right-2 font-poppins">
        suitable for the following activities
      </div>
    </div>
  );
};

export default WeatherWidget;
