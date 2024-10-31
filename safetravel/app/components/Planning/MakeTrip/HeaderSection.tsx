import React from "react";
import Image from "next/image";

const HeaderSection = () => {
  return (
    <header
      className="relative h-80 bg-cover bg-center rounded-lg"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dsw8c5d4r/image/upload/v1728957315/provinces/NhaTrang/yom1e2xjlhke7yqqvuii.jpg")',
      }}
    >
      <div className="absolute w-full bottom-0 bg-black bg-opacity-25 pt-1 pl-5 pb-3 flex flex-col justify-end rounded-lg">
        <h1 className="text-white text-4xl font-light font-maname">
          Discover hanoi
        </h1>
        <div className="flex item space-x-3 text-white mt-3">
          <p className="flex items-center  gap-2 text-white font-maname">
            <Image
              src="/pictures/calendar-icon-v2.png"
              className="mt-2"
              alt="icon"
              width={20}
              height={20}
            />
            Oct 24 - Oct 25
          </p>
          <p className="flex items-center gap-2 font-maname">
            <Image
              src="/pictures/location-icon.png"
              className="mt-2"
              alt="icon"
              width={20}
              height={20}
            />
            Ha Noi
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
