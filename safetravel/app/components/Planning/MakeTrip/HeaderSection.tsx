import React, { useEffect, useState } from "react";
import Image from "next/image";
import usePlanStore from "@/app/stores/planStore";
import { formatDate } from "@/app/lib/formatDate";

const HeaderSection = () => {
  const { plan } = usePlanStore()
  const [province, setProvince] = useState({
    id: '',
    name: '',
    imageUrl: ''
  });
  
  useEffect(() => {
    const fetchProvince = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/provinces?provinceName=${plan.province_name}`);
        const data = await response.json();
        if (data.length > 0) {
          setProvince(data[0]);
        }
      } catch (error) {
        console.error('Error fetching province data:', error);
      }
    };

    fetchProvince();
  }, []);
  
  return (
    <header
      className="relative h-80 bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${province.imageUrl})`,
      }}
    >
      <div className="absolute w-full bottom-0 bg-black bg-opacity-25 pt-1 pl-5 pb-3 flex flex-col justify-end rounded-lg">
        <h1 className="text-white text-4xl font-light font-maname">
          Discover {province.name}
        </h1>
        <div className="flex item space-x-3 text-white mt-3">
          <p className="flex items-center  gap-2 text-white font-maname">
            <Image
              src="/pictures/calendar-icon-v2.png"
              className="mt-2"
              alt="icon"
              width={20}
              height={20}
            />
            {formatDate(plan.date)}
          </p>
          <p className="flex items-center gap-2 font-maname">
            <Image
              src="/pictures/location-icon.png"
              className="mt-2"
              alt="icon"
              width={20}
              height={20}
            />
            {province.name}
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
