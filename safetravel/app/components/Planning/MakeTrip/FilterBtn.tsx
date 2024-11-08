import React, { useState } from "react";
import Image from "next/image";
import usePlanStore from "@/app/stores/planStore";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface FilterBtnProps {
  activeType: string;
  setActiveType: (type: string) => void;
}

const FilterBtn = ({ activeType, setActiveType }: FilterBtnProps) => {
  const { plan } = usePlanStore();
 
  const handleButtonClick = (buttonName: string) => {
    setActiveType(buttonName);
  };

   const handleCreatePlan = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-plan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ plan }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Plan created successfully:', data);
        toast.success('Plan created successfully!');
        // Optionally, update the state or navigate to another page
      } else {
        console.error('Failed to create plan');
        toast.error('Failed to create plan');
      }
    } catch (error) {
      console.error('Error creating plan:', error);
      toast.error('Failed to create plan');
    }
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
          flex font-poppins font-bold text-xs items-center ${activeType === "Food" ? 'bg-[#798bed]' : 'bg-white'}  shadow-lg px-4 py-2 rounded-full hover:bg-[#798bed]
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
      <button onClick={handleCreatePlan} className="flex items-center bg-white font-poppins font-bold text-xs shadow-lg px-4 py-2 rounded-full hover:bg-gray-200">
        Create Plan
      </button>
      <ToastContainer />
    </div>
  );
};

export default FilterBtn;
