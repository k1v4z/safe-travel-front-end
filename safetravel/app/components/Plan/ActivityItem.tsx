import React from "react";
import Image from "next/image";
import { Activity } from "@/app/lib/contract/IActivity";

interface IActivityProps{
  activity: Activity,
  isEdit: boolean
}

const ActivityItem = ({activity, isEdit}: IActivityProps) => {
  return (
    <div
      className="w-[75%] bg-white  ml-16 timeline-item flex py-4 px-6 mb-6 border border-[#c6c3c3] rounded-[20px] shadow-sm relative cursor-grabbing"
    >
      {/* Circular marker */}
      <div className="absolute left-[-58px] top-1/2 transform -translate-y-1/2 bg-[#d9d9d9] w-[30px] h-[30px] rounded-full"></div>
      <Image
        className={`absolute ${!isEdit ?'left-[-53px]' : 'left-[-47px]'} top-1/2 transform -translate-y-1/2 cursor-pointer`}
        src={!isEdit ? `/pictures/ai-navigation-icon.png` : `/pictures/subtract-icon.png`}
        width={!isEdit ? 20 : 8}
        height={!isEdit ? 20 : 8}
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
        <h2 className="text-lg font-gideonroman font-bold text-gray-800">
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
      {
        isEdit && <img className=" absolute w-[10%] h-[20%]  right-[-58px] top-14 cursor-grabbing" src="/pictures/move-icon.png" alt="" />
      }
    </div>
  );
};

export default ActivityItem;
