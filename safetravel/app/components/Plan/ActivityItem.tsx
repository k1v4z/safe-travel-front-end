import React from "react";
import Image from "next/image";
import {  Activity } from "@/app/lib/contract/IActivity";
import { useEffect, useState } from 'react';
import { formatDate } from "@/app/lib/formatDate";

interface IActivityProps{
  activity: Activity,
  isEdit: boolean,
  updateMapLocation(latitude: number, longitude: number): void
}

const ActivityItem = ({activity, isEdit, updateMapLocation}: IActivityProps) => {
  const [planId, setPlanId] = useState<string | null>(null);
  
  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const id = pathParts[pathParts.length - 1];
    
    setPlanId(id);
  }, []);

  const handleRemoveActivity = async (activityId: string) => {
    if (!planId) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plan/${planId}/remove-activity`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ activityId: activityId }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Activity removed successfully:', result);
      window.location.reload();

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div
      className="w-[85%] bg-white  ml-16 timeline-item flex py-4 px-6 mb-6 border border-[#c6c3c3] rounded-[20px] shadow-sm relative cursor-pointer"
      onClick={() => {
        if (!isEdit) {
          updateMapLocation(Number(activity.activity_location.latitude), Number(activity.activity_location.longitude));
        }else {
          handleRemoveActivity(activity.id);
        }
      }}
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
    </div>
  );
};

export default ActivityItem;
