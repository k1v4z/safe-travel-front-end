import React from 'react';

const RecommendationCard = () => {
  return (
    <div className="bg-blue-50 shadow-md rounded-3xl flex  items-center font-gideonroman space-x-6 m-6">
      {/* Image Section */}
      <div className="relative w-1/3 h-52">
        <img
          src="/pictures/154_hue 1.png"
          alt="The Imperial City of Hue"
          className=" object-fit w-full h-full"
        />
        <button className="absolute top-2 left-2 bg-white p-1 rounded-full shadow-md">
          <img
            src="/pictures/heart.png"
            alt="Heart Icon"
            className="w-5 h-5"
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="flex-grow">
        {/* Title */}
        <h2 className="text-2xl font-bold text-cyan-700 text-center mb-2 font-inter">
          The Imperial City of Hue
        </h2>
        {/* Details */}
      <div className="text-lg text-black grid grid-cols-2 gap-x-6 gap-y-6 ml-4">
        <div className="flex items-center font-gideonroman">
          <img src="/pictures/Screenshot.png" alt="Location" className="w-5 h-6 mr-2" />
          <p>Phu Hau, Hue, Thua Thien Hue</p>
        </div>
        <div className="flex items-center font-gideonroman">
          <img src="/pictures/ticket.png" alt="Ticket" className="w-5 h-5 mr-2" />
          <p>200,000 VND</p>
        </div>
        <div className="flex items-center font-gideonroman">
          <img src="/pictures/Alarm-Clock.png" alt="Clock" className="w-5 h-5 mr-2" />
          <p>07:30–17:00</p>
        </div>
        <div className="flex items-center font-gideonroman">
          <img src="/pictures/Car.png" alt="Car" className="w-5 h-5 mr-2" />
          <p>150,000 VND</p>
        </div>
        <div className="flex items-center font-gideonroman">
          <img src="/pictures/blank-calendar.png" alt="Calendar" className="w-5 h-5 mr-2" />
          <p>11/20 - 11/21</p>
        </div>
        <div className="flex items-center font-gideonroman">
          <img src="/pictures/Bookmark.png" alt="Visit" className="w-5 h-5 mr-2" />
          <p>Visit</p>
        </div>
      </div>

      </div>
    </div>
  );
};

export default RecommendationCard;
