import usePlanStore from "@/app/stores/planStore";
import React, { useEffect, useState } from "react";

const TripInput = () => {
  const { plan, setPlan } = usePlanStore();
  const [tripName, setTripName] = useState(plan.title);

  useEffect(() => {
    setTripName(plan.title);
  }, [plan.title]);
  
  const handleTripNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTripName = e.target.value;
    setTripName(newTripName);
    setPlan({ ...plan, title: newTripName });
  };

  return (
    <div className="mb-3 text-left">
      <label className="block text-lg font-poppins font-bold text-gray-700">
        Trip name
      </label>
      <input
        type="text"
        id="trip-name"
        placeholder="e.g., Summer vacation in Da Nang"
        maxLength={80}
        value={tripName}
        onChange={(e) => handleTripNameChange(e)}
        className="w-full p-3 border-[1px] border-gray-300 font-poppins rounded-xl mt-2"
      />
      <span className="text-xs text-gray-500 mt-1 block text-right font-poppins">
        {tripName.length}/80 max characters
      </span>
    </div>
  );
};

export default TripInput;
