import React from "react";
import Image from "next/image";
import Link from "next/link";

const TripHeader = () => {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-gideonroman mb-6">My Trips</h1>
        <div className="flex justify-center gap-4 mb-4">
          <Link href='/planning' className='w-auto px-8 py-4 flex flex-grow items-center justify-center bg-green-100 rounded-lg text-lg hover:bg-green-200 transition-colors'>
            <button className="w-auto px-8 py-4 flex flex-grow items-center justify-center bg-green-100 rounded-lg text-lg hover:bg-green-200 transition-colors">
            <span className="font-gideonroman font-bold text-4xl mr-2">+</span>
            <span className="font-gideonroman font-bold">
              Create a new trip
            </span>
          </button>
          </Link>
          <button className="w-auto px-8 py-4 flex flex-grow items-center justify-center bg-blue-100 rounded-lg text-lg hover:bg-blue-200 transition-colors">
            <Image
              src="/pictures/AI-icon.png"
              alt="AI Icon"
              width={25}
              height={25}
              className="mr-2"
            />
            <span className="font-gideonroman font-bold">
              Build a trip with AI
            </span>
          </button>
        </div>
        <div className="flex justify-end text-lg text-gray-600">
          <span className="font-gideonroman">Sort by: Last edited date</span>
          <span className="ml-2">⮟</span>
        </div>
      </header>
    </div>
  );
};

export default TripHeader;
