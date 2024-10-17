"use client"
import { useState } from "react";
import ActivityItem from "./ActivityItem";
import { Plan, ProvincePlan} from "@/app/lib/contract/IActivity";
import { formatDate } from "@/app/lib/formatDate";


interface IPlanTimeLineProps {
  plan: Plan,
  updateMapLocation(newLatitude: number, newLongitude: number): void
}

const PlanTimeline = (planTimeLineProps: IPlanTimeLineProps) => {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="w-full overflow-hidden mt-1 p-6">
      {/* My Plan Header */}
      <div className="w-3/4 flex items-center  p-4 rounded-lg mb-6">
        <img className="w-16 h-16 mr-4" src="/pictures/target--shop-bullseye-arrow-target.png" alt="My Plan" />
        <div>
          <h1 className="text-4xl font-gideonroman font-bold text-[#326D7B]">{planTimeLineProps.plan.title}</h1>
          <h2 className="text-3xl font-gideonroman font-bold text-[#9c3e3f]">{
            planTimeLineProps.plan.plan_on_province && planTimeLineProps.plan.plan_on_province.map((province: ProvincePlan) => (
              province.province.name
            ))
          }</h2>
          <p className="text-sm font-gideonroman">{formatDate(planTimeLineProps.plan.date)}</p>
        </div>
      </div>

      {/* Plan Date and Edit Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-gideonroman text-black">{formatDate(planTimeLineProps.plan.date)}</h1>
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
          {planTimeLineProps.plan.activities && planTimeLineProps.plan.activities.map((activity) => (
            <ActivityItem updateMapLocation={planTimeLineProps.updateMapLocation} activity={activity} isEdit={isEdit} key={activity.id}/>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default PlanTimeline;
