import React from 'react';

interface RecommendationCard {
  name: string;
  address: string;
  open_at: string;
  close_at: string;
  longitude: string;
  latitude: string;
  imageUrl: string;
  transportation: string;
  money: string;
  locationType: string;
}

interface RecommendationCardProps {
  recommendation: RecommendationCard;
  onClick: (item: any) => void;
}

const RecommendationCard = ({recommendation, onClick}: RecommendationCardProps) => {
  return (
    <div className="bg-blue-50 shadow-md rounded-3xl flex  items-center font-gideonroman space-x-6 m-6">
      {/* Image Section */}
      <div className="relative w-1/3 h-52">
        <img
          src={recommendation.imageUrl}
          alt="The Imperial City of Hue"
          className=" object-cover w-full h-full border rounded-3xl"
        />
        <button onClick={
          () => onClick(recommendation)
        } className="absolute top-2 left-2 bg-white p-1 rounded-full shadow-md">
          <img
            src="/pictures/heart.png"
            alt="Heart Icon"
            className="w-4 h-4"
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="flex-grow">
        {/* Title */}
        <h2 className="text-2xl font-bold text-cyan-700 text-center mb-2 font-inter">
          {recommendation.name}
        </h2>
        {/* Details */}
      <div className="text-lg text-black grid grid-cols-2 gap-x-6 gap-y-6 ml-4">
        <div className="flex items-center font-gideonroman">
          <img src="/pictures/Screenshot.png" alt="Location" className="w-5 h-6 mr-2" />
          <p>{recommendation.address}</p>
        </div>
        <div className="flex items-center font-gideonroman">
          <img src="/pictures/ticket.png" alt="Ticket" className="w-5 h-5 mr-2" />
          <p>{recommendation.money}</p>
        </div>
        <div className="flex items-center font-gideonroman">
          <img src="/pictures/Alarm-Clock.png" alt="Clock" className="w-5 h-5 mr-2" />
          <p>{recommendation.open_at}–{recommendation.close_at}</p>
        </div>
        <div className="flex items-center font-gideonroman">
          <img src="/pictures/Car.png" alt="Car" className="w-5 h-5 mr-2" />
          <p>{recommendation.transportation}</p>
        </div>
        <div className="flex items-center font-gideonroman">
          <img src="/pictures/blank-calendar.png" alt="Calendar" className="w-5 h-5 mr-2" />
          <p>11/20 - 11/21</p>
        </div>
        <div className="flex items-center font-gideonroman">
          <img src="/pictures/Bookmark.png" alt="Visit" className="w-5 h-5 mr-2" />
          <p>{recommendation.locationType}</p>
        </div>
      </div>

      </div>
    </div>
  );
};

export default RecommendationCard;
