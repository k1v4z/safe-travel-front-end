"use client";
import React, { useState } from "react";
import Image from "next/image";
import usePlanStore from "@/app/stores/planStore";
import ButtonGroup from "../DayChosen/ButtonGroup";

interface KindChosenProps {
  onBack: () => void;
  onNext: () => void;
}

const SelfMade1 = ({onBack, onNext}: KindChosenProps) => {
  const { plan, setPlan } = usePlanStore();
  const [selectedKind, setSelectedKind] = useState(plan.kind_name || "");
  const [haveChild, setHaveChild] = useState(false);

  const handleKindClick = (kindName: string) => {
    setSelectedKind(kindName);
    setPlan({ ...plan, kind_name: kindName });
  };

  const handleHaveChildClick = (value: boolean) => {
    setHaveChild(value);
    setPlan({ ...plan, have_children: value });
  }

  const handleNext = () => {
    if (!selectedKind) {
      alert("Please choose a kind of trip.");
      return;
    }

    onNext();
  };

  const trips = [
    { name: "Solo Trip", icon: "/pictures/solo-trip.png" },
    { name: "Partner Trip", icon: "/pictures/friends-trip.png" },
    { name: "Friends Trip", icon: "/pictures/partner-trip.png" },
    { name: "Family Trip", icon: "/pictures/family-trip.png" },
  ];

  return (
    <div className="flex flex-col font-gideonroman items-center min-h-screen bg-[#D2FBFD] py-6">
      <h1 className="text-4xl font-semibold mb-2 ">
        What kind of trip are you planning?
      </h1>
      <p className="text-xl mb-8">Select one.</p>

      <div className="flex gap-5 mb-8 ">
        {trips.map((trip) => (
          <div
            key={trip.name}
            className={`w-48 h-25 ${selectedKind == trip.name ? 'bg-[#1CD8D2] text-white' : 'bg-white' } rounded-2xl relative shadow-md flex items-center justify-center px-4 py-2 cursor-pointer  hover:bg-[#1CD8D2] hover:text-white transition-colors duration-300`}
            onClick={() => handleKindClick(trip.name)}
          >
            {/* Using Next.js Image component */}
            <Image
              src={trip.icon}
              alt={`${trip.name} icon`}
              width={25}
              height={25}
              className="mr-2 absolute left-5 top-3 w-7"
            />
            <div className="flex flex-col justify-center items-center h-full text-center ">
              {" "}
              {/* Centering the text vertically and horizontally */}
              <p className="text-lg font-bold p-7 ">{trip.name}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xl mb-8">Are you traveling with children?</p>
      <div className="flex gap-5 mb-10">
        <button onClick={() => {handleHaveChildClick(true)}} className={`px-10 py-2 rounded-full ${haveChild ? 'bg-[#1CD8D2] text-white' : 'bg-gray-300 text-black'} font-bold hover:bg-[#18A8A5] transition-colors duration-300`}>
          Yes
        </button>
        <button onClick={() => {handleHaveChildClick(false)}} className={`px-10 py-2 rounded-full ${!haveChild ? 'bg-[#1CD8D2] text-white' : 'bg-gray-300 text-black'} font-bold hover:bg-[#1CD8D2] hover:text-white transition-colors duration-300`}>
          No
        </button>
      </div>

      <ButtonGroup onBack={onBack} onNext={handleNext} />
    </div>
  );
};
export default SelfMade1;
