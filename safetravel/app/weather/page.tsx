"use client"
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import WeatherContainer from "../components/Weather/WeatherContainer";
import useWeatherStore from "../stores/weatherStore";
import dynamic from "next/dynamic";
import useAirStore from "../stores/airStore";
import useHourlyForecastStore from "../stores/hourlyForecastStore";
import useDailyForecastStore from "../stores/dailyForecastStore";

const HereMap = dynamic(() => import('@/app/components/HereMap'), {
  ssr: false, // Disable ssr for HereMap component
});

const Weather = () => {
  const [location, setLocation] = useState({lat: 15.932077, lng: 108.193575})
  const {weather, setWeather} = useWeatherStore()
  const {setAirQuality} = useAirStore();
  const {setHourlyForecast} = useHourlyForecastStore()
  const {setDailyForecast} = useDailyForecastStore()

  useEffect(() => {
    //Get currently location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  //fetching weather data api
  useEffect(() => {
    const fetchWeather = async() => {
      try{
        const responseWeather = await fetch(`http://${process.env.NEXT_PUBLIC_SERVER}/weather?lat=${location.lat}&lng=${location.lng}&type=weather&domain=api.openweathermap.org`)
        const responseAirQuality = await fetch(`http://${process.env.NEXT_PUBLIC_SERVER}/weather?lat=${location.lat}&lng=${location.lng}&type=air_pollution&domain=api.openweathermap.org`)
        const responseHourlyForecast = await fetch(`http://${process.env.NEXT_PUBLIC_SERVER}/weather?lat=${location.lat}&lng=${location.lng}&type=forecast/hourly&domain=pro.openweathermap.org`)
        const responseDailylyForecast = await fetch(`http://${process.env.NEXT_PUBLIC_SERVER}/weather?lat=${location.lat}&lng=${location.lng}&type=forecast/daily&domain=pro.openweathermap.org`)
        const weatherData = await responseWeather.json()   
        const airQualityData = await responseAirQuality.json()
        const hourlyForecastData = await responseHourlyForecast.json()
        const dailyForecastData = await responseDailylyForecast.json()
        setWeather(weatherData)
        setAirQuality(airQualityData)
        setHourlyForecast(hourlyForecastData)
        setDailyForecast(dailyForecastData)
      }catch(err){
        
      }
    }
    fetchWeather()
  },[])
  
  return (
    <div className="min-h-screen bg-[#D2FBFD] flex flex-col">
      <Header />

      {/* Search Bar */}
      <SearchBar/>

      {/* Weather Container */}
      <WeatherContainer/>

      {/* Map and Footer */}
      <HereMap latitude={location.lat} longitude={location.lng}/> 
      <Footer />
    </div>
  );
};

export default Weather;
