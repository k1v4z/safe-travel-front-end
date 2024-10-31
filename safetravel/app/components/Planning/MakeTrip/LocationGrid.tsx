import React from "react";
import Image from "next/image";

const cardData = [
  {
    image:
      "https://res.cloudinary.com/dsw8c5d4r/image/upload/v1728957315/provinces/NhaTrang/yom1e2xjlhke7yqqvuii.jpg",
    title: "Hanoi Old Quarter Vietnam",
    description:
      "Points of Interest & Landmarks, Silks, silver, and souvenirs draw tourists to this popular street market.",
    openTime: "Open now 8:00 AM - 4:30 PM",
  },
  {
    image:
      "https://res.cloudinary.com/dsw8c5d4r/image/upload/v1728957315/provinces/NhaTrang/yom1e2xjlhke7yqqvuii.jpg",
    title: "Ho Chi Minh Mausoleum",
    description:
      "Historic Sites, the final resting place of the country's most notable historic figure.",
    openTime: "Open now 8:00 AM - 4:30 PM",
  },
  {
    image:
      "https://res.cloudinary.com/dsw8c5d4r/image/upload/v1728957315/provinces/NhaTrang/yom1e2xjlhke7yqqvuii.jpg",
    title: "Ho Chi Minh Mausoleum",
    description:
      "Historic Sites, the final resting place of the country's most notable historic figure.",
    openTime: "Open now 8:00 AM - 4:30 PM",
  },
  {
    image:
      "https://res.cloudinary.com/dsw8c5d4r/image/upload/v1728957315/provinces/NhaTrang/yom1e2xjlhke7yqqvuii.jpg",
    title: "Ho Chi Minh Mausoleum",
    description:
      "Historic Sites, the final resting place of the country's most notable historic figure.",
    openTime: "Open now 8:00 AM - 4:30 PM",
  },
  {
    image:
      "https://res.cloudinary.com/dsw8c5d4r/image/upload/v1728957315/provinces/NhaTrang/yom1e2xjlhke7yqqvuii.jpg",
    title: "Ho Chi Minh Mausoleum",
    description:
      "Historic Sites, the final resting place of the country's most notable historic figure.",
    openTime: "Open now 8:00 AM - 4:30 PM",
  },
  {
    image:
      "https://res.cloudinary.com/dsw8c5d4r/image/upload/v1728957315/provinces/NhaTrang/yom1e2xjlhke7yqqvuii.jpg",
    title: "Ho Chi Minh Mausoleum",
    description:
      "Historic Sites, the final resting place of the country's most notable historic figure.",
    openTime: "Open now 8:00 AM - 4:30 PM",
  },
  // Add the other cards similarly...
];

const LocationGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {cardData.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg relative">
          <Image
            src={item.image}
            alt={item.title}
            width={300}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-gideonroman font-bold shadow-">
              {item.title}
            </h3>
            <p className="text-black font-bold text-sm mt-2 font-inter">
              {item.description}
            </p>
            <div className="flex items-center mt-3 text-gray-500">
              <Image
                src="/pictures/clock-icon.png"
                alt="clock"
                width={16}
                height={16}
              />
              <p className="ml-2 font-inter font-bold text-sm">
                {item.openTime}
              </p>
            </div>
          </div>
          <div className="absolute top-3 right-3 bg-gray-300 p-2 rounded-full">
            <Image
              src="/pictures/favorite-icon.png"
              alt="save icon"
              width={16}
              height={16}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationGrid;
