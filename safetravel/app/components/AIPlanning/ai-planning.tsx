"use client";
import React, { useEffect, useState } from "react";
import WeatherWidget from "../../components/Planning6/WeatherWidget";
import TripHeader from "../../components/Planning6/TripHeader";
import RecommendationCard from "../../components/Planning6/RecommendationCard";
import PlanSummary from "../../components/Planning6/PlanSummary";
import usePlanStore from "../../stores/planStore";
import LoadingPage from "../../components/Loading";
import DayPopup from "../Popup/DayPopup";
import { convertISOToDate } from "@/app/lib/formatDate";
import ErrorPage from "../ErrorPage";

const AIPlanning = () => {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [weather, setWeather] = useState({
    temperature: 0,
    windSpeed: 0,
    humidity: 0,
    weatherCondition: "",
    deg: 0,
    pressure: 0,
    icon: "",
  });

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

   const handleFavoriteClick = (item: any) => {
     setSelectedItem(item);
     setShowPopup(!showPopup);
   };

  const { plan, setPlan } = usePlanStore();
  const [loading, setLoading] = useState(true);
   const handleAddToPlanStore = (startDate: Date, endDate: Date) => {
    if (selectedItem) {
      const newActivity = {
        activity_location_id: selectedItem.id,
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
      };
      
      const existingActivityIndex = plan.activities.findIndex(
        (activity) => activity.activity_location_id === selectedItem.id
      );

      if (existingActivityIndex !== -1) {
        // Update existing activity
        const updatedActivities = [...plan.activities];
        updatedActivities[existingActivityIndex] = newActivity;
        setPlan({ ...plan, activities: updatedActivities });
      } else {
        // Add new activity
        setPlan({ ...plan, activities: [...plan.activities, newActivity] });
      }

      handleClosePopup();
    }
  };
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
    setPlan({ ...plan, user_id: storedUserId || "" });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const requestBody = {
        province: plan.province_name,
        planDate: convertISOToDate(plan.date),
      };

      console.log(convertISOToDate(plan.date));
      

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
      {loading ? (
        <LoadingPage />
      ) : !data ? (
        <ErrorPage />
      ) : (
        <div>
          <WeatherWidget weather={weather} />
          <TripHeader />
          <PlanSummary />
          {data.map((recommendation, index) => (
            <RecommendationCard
              onClick={handleFavoriteClick}
              key={index}
              recommendation={recommendation}
            />
          ))}
          {showPopup && (
            <DayPopup
              onClose={handleClosePopup}
              onAddToPlanStore={handleAddToPlanStore}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AIPlanning;
