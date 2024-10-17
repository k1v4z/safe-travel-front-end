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

      {/* Hard code temporarily */}
      <HereMap latitude={15.932077} longitude={108.193575}/> 
      <Footer />
    </div>
  );
};

export default Weather;
