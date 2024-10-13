import React from "react";
import Image from "next/image";
import { Activity } from "@/app/lib/contract/IActivity";

interface IActivityProps{
  activity: Activity
}

const ActivityItem = ({activity}: IActivityProps) => {
  return (
    <div
      className="w-[85%]  ml-16 timeline-item flex py-4 px-6 mb-6 border border-[#ACA5A5] rounded-[20px] shadow-sm relative"
    >
      {/* Circular marker */}
      <div className="absolute left-[-58px] top-1/2 transform -translate-y-1/2 bg-[#D9D9D9] w-[30px] h-[30px] rounded-full"></div>
      <Image
        className="absolute left-[-53px] top-1/2 transform -translate-y-1/2"
        src={"/pictures/ai-navigation-icon.png"}
        width={20}
        height={20}
        alt=""
      />
      {/* Timeline item content */}
      <div className="flex-shrink-0 mr-4">
        <img
          className="w-32 h-24 object-cover rounded-md"
          src={activity.imageUrl}
          alt={activity.title}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-gideonroman text-gray-800">
          {activity.title}
        </h2>
        <p className="text-sm font-gideonroman text-[#0A1641]">
          {activity.location}
        </p>
        <p className="text-sm font-gideonroman text-[#0A1641]">
          {activity.address}
        </p>
        <p className="text-sm font-gideonroman text-[#0A1641]">
          {activity.hours}
        </p>
      </div>
    </div>
  );
};

export default ActivityItem;
