import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import HereMap from "../components/HereMap";
import SearchBar from "../components/SearchBar";
import WeatherContainer from "../components/Weather/WeatherContainer";

const Weather = () => {
  return (
    <div className="min-h-screen bg-[#D2FBFD] flex flex-col">
      <Header />

      {/* Search Bar */}
      <SearchBar/>

      {/* Weather Container */}
      <WeatherContainer/>

      {/* Map and Footer */}
      <HereMap />
      <Footer />
    </div>
  );
};

export default Weather;
