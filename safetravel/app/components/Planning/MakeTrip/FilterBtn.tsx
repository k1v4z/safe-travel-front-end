import React, { useState } from "react";
import Image from "next/image";

interface FilterBtnProps {
  activeType: string;
  setActiveType: (type: string) => void;
}

const FilterBtn = ({ activeType, setActiveType }: FilterBtnProps) => {
 
  const handleButtonClick = (buttonName: string) => {
    setActiveType(buttonName);
  };
  
  return (
    <div className="flex space-x-5 my-5">
      <button 
        onClick={() => handleButtonClick("thingsToDo")}
        className={`flex items-center font-poppins font-bold text-xs px-4 py-2 rounded-full shadow-lg hover:bg-[#ea75a9] ${
          activeType === "thingsToDo" ? "bg-[#ea75a9]" : "bg-white"
        }`}>
        <Image
          src="/pictures/smile-icon.png"
          alt="icon"
          width={20}
          height={20}
          className="mr-2"
        />
        Things to do
      </button>
      <button
        onClick={() => handleButtonClick("Food")} 
        className={`
          flex font-poppins font-bold text-xs items-center ${activeType === "Food" ? 'bg-[#798bed]' : 'bg-white'} bg-white shadow-lg px-4 py-2 rounded-full hover:bg-[#798bed]
        `}>
        <Image
          src="/pictures/food-icon.png"
          alt="icon"
          width={20}
          height={20}
          className="mr-2"
        />
        Food & Drink
      </button>
      <button 
        onClick={() => handleButtonClick("Accomodation")}
        className={`flex items-center ${activeType === "Accomodation" ? 'bg-[#75eab2]' : 'bg-white'} font-poppins font-bold text-xs  shadow-lg px-4 py-2 rounded-full hover:bg-[#75eab2]`}>
        <Image
          src="/pictures/stay-icon.png"
          alt="icon"
          width={20}
          height={20}
          className="mr-2"
        />
        Places to stay
      </button>
    </div>
  );
};

export default FilterBtn;
