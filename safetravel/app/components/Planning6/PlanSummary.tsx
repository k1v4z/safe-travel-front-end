import React from 'react';

const PlanSummary = () => {
  return (
    <div className="flex justify-start ml-7 mb-8 space-x-3 font-poppins">
      <button className="bg-white px-4 py-2 rounded-full text-sm font-bold flex items-center hover:bg-gray-300 active:bg-gray-400">
        <img src="/pictures/triangle.png" alt="Visit Icon" className="w-5 h-5 mr-2" />
        Visit
      </button>
      <button className="bg-white px-4 py-2 rounded-full text-sm font-bold flex items-center hover:bg-gray-300 active:bg-gray-400">
        <img src="/pictures/food-icon.png" alt="Food Icon" className="w-5 h-5 mr-2" />
        Food & Drink
      </button>
      <button className="bg-white px-4 py-2 rounded-full text-sm font-bold flex items-center hover:bg-gray-300 active:bg-gray-400">
        <img src="/pictures/Home.png" alt="Accommodation Icon" className="w-5 h-5 mr-2" />
        Accommodation
      </button>
      <button className="bg-white px-4 py-2 rounded-full text-sm font-bold flex items-center hover:bg-gray-300 active:bg-gray-400">
        <img src="/pictures/Board.png" alt="Museum Icon" className="w-5 h-5 mr-2" />
        Museum
      </button>
    </div>
  );
};

export default PlanSummary;
