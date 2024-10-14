"use client"
import { useState } from "react";
import ActivityItem from "./ActivityItem";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

const initalActivities = [
    {
      id: 'abc',
      imageUrl: '/pictures/154_hue 1.png',
      title: 'The Imperial City of Hue',
      address: 'Phu Hau, Hue City, Thua Thien Hue',
      location: 'Hue',
      hours: 'Open now • Closes at 17:00',
    },
    {
      id: 'xyz',
      imageUrl: '/pictures/154_hue 4.png',
      title: 'Bun Bo Hue - O Be',
      address: '77 Nguyen Hue, Phu Nhuan, Hue',
      location: 'Hue',
      hours: 'Open now • Closes at 12:30',
    },
    {
      id: 'lop',
      imageUrl: '/pictures/154_hue 8.png',
      title: 'Thien An Hill',
      address: 'Thuy Bang, Huong Thuy Town, Thua Thien Hue',
      location: 'Hue',
      hours: 'Open now',
    },
    {
      id: '1sa',
      imageUrl: '/pictures/154_hue 10.png',
      title: 'Aeon Mall',
      address: '08 Vo Nguyen Giap, An Duong Vuong, Hue',
      location: 'Hue',
      hours: 'Open now • Closes at 22:00',
    },
  ];

const PlanTimeline = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [activities, setActivities] = useState(initalActivities)

  return (
    <div className="w-full overflow-hidden mt-1 p-6">
      {/* My Plan Header */}
      <div className="w-3/4 flex items-center  p-4 rounded-lg mb-6">
        <img className="w-16 h-16 mr-4" src="/pictures/target--shop-bullseye-arrow-target.png" alt="My Plan" />
        <div>
          <h1 className="text-4xl font-gideonroman font-bold text-[#326D7B]">My Plan</h1>
          <h2 className="text-3xl font-gideonroman font-bold text-[#9c3e3f]">HUE</h2>
          <p className="text-sm font-gideonroman">Partner • October • 2 days</p>
        </div>
      </div>

      {/* Plan Date and Edit Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-gideonroman text-black">Friday, Oct 25</h1>
        <div className="flex flex-row gap-2 cursor-pointer">
          {
            isEdit && 
            <button className="bg-white text-xs px-6 text-black py-1 rounded-3xl font-roboto_light font-bold" onClick={() => setIsEdit(!isEdit)}>
              CANCEL
            </button>
          }
          <button className="bg-[#26DAD1] text-sm px-6 text-white py-1 rounded-3xl font-roboto_light font-bold" onClick={() => setIsEdit(!isEdit)}>
            {
              isEdit ? 'SAVE' : 'EDIT'
            }
          </button>
          <img src="/pictures/inversion-arrow-icon.png" alt="" />
        </div>
      </div>

      {/* Timeline with vertical line */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[20px] top-0 h-full w-[1px] bg-black"></div>
        <div className="timeline h-[60vh] sm:h-[80vh] overflow-y-auto pr-2">
          {activities.map((activity, index) => (
            <ActivityItem  activity={activity} isEdit={isEdit} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanTimeline;
