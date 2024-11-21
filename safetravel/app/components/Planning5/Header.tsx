import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-cyan-100 p-6">
      {/* Left side - Main content */}
      <div>
        <h1 className="text-sm text-gray-700 mt-2">Review our recommendations for your trip</h1>
        <h2 className="text-4xl font-bold my-2">HUE</h2>
        <p className="text-gray-600 mb-2">Partner • November • 4 days</p>
      </div>

      {/* Right side - "My Plan" with image */}
      <div className="flex flex-col items-center text-gray-700 mr-9">
        <div className="w-14 h-14 rounded-full overflow-hidden ">
          <Image src="/pictures/Target--Streamline-Core-Neon.png" alt="My Plan Icon" width={80} height={80} />
        </div>
        <p className="text-2xl mt-1">My Plan</p>
      </div>
    </div>
  );
}
