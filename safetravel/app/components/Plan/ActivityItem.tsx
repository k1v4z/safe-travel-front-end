import React from "react";
import Image from "next/image";
import {  Activity } from "@/app/lib/contract/IActivity";
import { formatDate } from "@/app/lib/formatDate";

interface IActivityProps{
  activity: Activity,
  isEdit: boolean,
  updateMapLocation(latitude: number, longitude: number): void
}

const ActivityItem = ({activity, isEdit, updateMapLocation}: IActivityProps) => {
  
  return (
    <div
      className="w-[75%] bg-white  ml-16 timeline-item flex py-4 px-6 mb-6 border border-[#c6c3c3] rounded-[20px] shadow-sm relative cursor-pointer"
    >
      {/* Circular marker */}
      <div className="absolute left-[-58px] top-1/2 transform -translate-y-1/2 bg-[#d9d9d9] w-[30px] h-[30px] rounded-full"></div>
      <Image
        className={`absolute ${!isEdit ?'left-[-53px]' : 'left-[-47px]'} top-1/2 transform -translate-y-1/2 cursor-pointer`}
        src={!isEdit ? `/pictures/ai-navigation-icon.png` : `/pictures/subtract-icon.png`}
        width={!isEdit ? 20 : 8}
        height={!isEdit ? 20 : 8}
        alt=""
        onClick={() => {
          if(!isEdit){
            updateMapLocation(Number(activity.activity_location.latitude), Number(activity.activity_location.longitude))
          }
        }}
      />
      {/* Timeline item content */}
      <div className="flex-shrink-0 mr-4">
        <img
          className="w-32 h-24 object-cover rounded-md"
          src={activity.activity_location.imageUrl}
          alt={activity.activity_location.name}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-gideonroman font-bold text-gray-800">
          {activity.activity_location.name}
        </h2>
        <p className="text-sm font-gideonroman text-[#0A1641]">
          {activity.activity_location.address}
        </p>
        <p className="text-sm font-gideonroman text-[#0A1641]">
          From: {formatDate(activity.start_date)} to {formatDate(activity.end_date)}
        </p>
        <p className="text-sm font-gideonroman text-[#0A1641]">
          Open at: {activity.activity_location.open_at} &#x2022; Close at: {activity.activity_location.close_at}
        </p>
      </div>
      {
        isEdit && <img className=" absolute w-[10%] h-[20%]  right-[-58px] top-14" src="/pictures/move-icon.png" alt="" />
      }
    </div>
  );
};

export default ActivityItem;
