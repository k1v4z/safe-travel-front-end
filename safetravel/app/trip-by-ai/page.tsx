"use client";
import React, { useEffect, useState } from "react";
import WeatherWidget from "../components/Planning6/WeatherWidget";
import TripHeader from "../components/Planning6/TripHeader";
import RecommendationCard from "../components/Planning6/RecommendationCard";
import PlanSummary from "../components/Planning6/PlanSummary";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import usePlanStore from "../stores/planStore";
import LoadingPage from "../components/Loading";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [weather, setWeather] = useState({
    temperature: 0,
    windSpeed: 0,
    humidity: 0,
    weatherCondition: "",
    deg: 0,
    pressure: 0,
    icon: "",
  });
  const { plan } = usePlanStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const requestBody = {
        province: plan.province_name,
        planDate: plan.date,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/suggest-location`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
          credentials: "include",
        }
      );

      const data = await response.json();
      setData(data.suggestLocation);
      setWeather(data.weather);
      setLoading(false); // Hoàn tất tải dữ liệu
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#D2FBFD] min-h-screen min-w-96">
      <Header />
      {loading ? (
        <LoadingPage />
      ) : (
        <div>
          <WeatherWidget weather={weather} />
          <TripHeader />
          <PlanSummary />
          {data.map((recommendation, index) => (
            <RecommendationCard key={index} recommendation={recommendation} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
