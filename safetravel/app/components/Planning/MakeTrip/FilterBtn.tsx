import React from "react";
import Image from "next/image";

const FilterBtn = () => {
  return (
    <div className="flex space-x-5 my-5">
      <button className="flex items-center font-poppins font-bold text-xs  bg-white shadow-lg px-4 py-2 rounded-full hover:bg-[#ea75a9]">
        <Image
          src="/pictures/smile-icon.png"
          alt="icon"
          width={20}
          height={20}
          className="mr-2"
        />
        Things to do
      </button>
      <button className="flex font-poppins font-bold text-xs items-center bg-white shadow-lg px-4 py-2 rounded-full hover:bg-[#798bed]">
        <Image
          src="/pictures/food-icon.png"
          alt="icon"
          width={20}
          height={20}
          className="mr-2"
        />
        Food & Drink
      </button>
      <button className="flex items-center font-poppins font-bold text-xs bg-white shadow-lg px-4 py-2 rounded-full hover:bg-[#75eab2]">
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
