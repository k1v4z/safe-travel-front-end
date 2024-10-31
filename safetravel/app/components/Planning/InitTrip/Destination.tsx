import { provinces } from "@/app/lib/provinces";
import usePlanStore from "@/app/stores/planStore";
import React, { useState } from "react";

const Destination = () => {
  const {plan, setPlan} = usePlanStore();
  const [destination, setDestination] = useState(plan.province_name || "");

  const handleDestinationClick = (provinceName: string) => {
    setDestination(provinceName);
    setPlan({ ...plan, province_name: provinceName }); 
    console.log(plan);
  }

  return (
    <div className="mb-0 text-left">
      <label className="block text-lg font-poppins font-bold text-gray-700">
        Destination
      </label>
      <div className="relative mt-2">
        <div className="relative flex items-center">
          <button className="absolute left-3">
            <img src="/pictures/search.svg" alt="Search" className="w-6" />
          </button>
          <input
            type="text"
            id="destination"
            placeholder="Where to...?"
            className="w-full pl-10 p-3 border-[1px] border-gray-300 rounded-xl font-poppins"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        {/* Scrollable List */}
        <div className="mt-3 max-h-52 overflow-y-auto space-y-3">
          {provinces.map((province) => (
            <div
              key={province.name}
              className={`flex items-center bg-white rounded-lg p-3 hover:bg-gray-200 cursor-pointer`}
              onClick={() => handleDestinationClick(province.name)}
            >
              <img
                src={province.imageUrl}
                alt={province.name}
                className="w-16 h-12 mr-3 rounded-lg"
              />
              <p className="text-sm font-inter font-bold">{province.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
