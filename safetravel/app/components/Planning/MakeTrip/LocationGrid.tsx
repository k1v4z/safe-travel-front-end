import React, { useEffect, useState } from "react";
import Image from "next/image";
import usePlanStore from "@/app/stores/planStore";

interface LocationGridProps {
  page: number;
  limit: number;
  setTotalPages: (totalPages: number) => void;
  activeType: string;
}

const LocationGrid = ({page, limit, setTotalPages, activeType}: LocationGridProps) => {
  const [cardData, setCardData] = useState([] as any[]);
  
  const {plan, setPlan} = usePlanStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity-locations?page=${page}&limit=${limit}&province=${plan.province_name}${activeType != 'thingsToDo' ? `&type=${activeType}` : ''}`);
        const data = await response.json();
        setCardData(data.results.locations);
        setTotalPages(data.results.totalPages);
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    fetchData();
  }, [page, limit, plan.province_name, activeType]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {cardData.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg relative">
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={300}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-gideonroman font-bold shadow-">
              {item.name}
            </h3>
            <p className="text-black font-bold text-sm mt-2 font-inter">
              Points of Interest & Landmarks, Silks, silver, and souvenirs draw tourists to this popular street market.
            </p>
            <div className="flex items-center mt-3 text-gray-500">
              <Image
                src="/pictures/clock-icon.png"
                alt="clock"
                width={16}
                height={16}
              />
              <p className="ml-2 font-inter font-bold text-sm">
                Open at: {item.open_at} - Close at: {item.close_at}
              </p>
            </div>
          </div>
          <div className="absolute top-3 right-3 bg-gray-300 p-2 rounded-full">
            <Image
              src="/pictures/favorite-icon.png"
              alt="save icon"
              className="cursor-pointer hover:scale-110"
              width={16}
              height={16}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationGrid;
