import Image from 'next/image';

export default function TripHeader() {
  return (
    <div className="flex justify-between items-center bg-cyan-100 mt-3 relative">
      {/* Main content - Centered */}
      <div className="flex flex-col items-center justify-between flex-grow">
        <h1 className="text-lg font-semibold  mt-2 font-gideonroman">Let's review our recommendations for your trip</h1>
        <h2 className="text-4xl font-bold my-2 leading-tight font-gideonroman">HUE</h2>
        <p className=" mb-2 text-base font-inter ">Partner • November • 4 days</p>
      </div>

      {/* Right side - "My Plan" with image */}
      <div className="flex flex-col items-center text-gray-700 mr-9 absolute right-3">
        <div className="w-14 h-14 overflow-hidden ">
          <Image src="/pictures/Target--Streamline-Core-Neon.png" alt="My Plan Icon" width={60} height={60} />
        </div>
        <p className="text-2xl mt-1 font-gideonroman text-black">My Plan</p>
      </div>
    </div>
  );
}