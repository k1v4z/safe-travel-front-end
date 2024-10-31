import React from "react";
import Image from "next/image"

const TripItem = () => {
  return (
    <div className="flex bg-white rounded-lg shadow-md p-4 items-center">
      <Image
        src="https://res.cloudinary.com/dsw8c5d4r/image/upload/v1728957315/provinces/NhaTrang/yom1e2xjlhke7yqqvuii.jpg"
        alt="Hue with family"
        width={300}
        height={200}
        className="rounded-lg object-cover"
      />
      <div className="flex flex-col justify-between ml-4">
        <h2 className="text-2xl font-gideonroman font-bold">Hue with family</h2>
        <p className="text-lg text-gray-800 font-gideonroman">
          🗓️ Oct 17 – Oct 19, 2024
          <Image
            src="/pictures/location-plan-icon.png"
            alt="Hue Icon"
            width={25}
            height={25}
            className="inline ml-2 font-gideonroman"
          />
          Hue
        </p>
        <p>Transportation: Plane</p>
        <p>Kind: Family Trip</p>
      </div>
      <div className="ml-auto text-2xl cursor-pointer">⋯</div>
    </div>
  );
};

export default TripItem;
