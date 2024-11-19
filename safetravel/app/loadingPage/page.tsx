export default function Home() {
    return (
      <div className="flex items-center justify-center h-screen bg-[#D2FBFD]">
        <div className="text-center relative">

          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute w-full h-full rounded-full border-4 border-blue-200 animate-spin"></div>
            <div className="absolute w-full h-full rounded-full border-4 border-blue-500 border-t-transparent animate-spin-fast"></div>
            

            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="pictures/Check.png" 
                alt="Check Icon" 
                className="w-10 h-10"
              />
            </div>
          </div>
  
          {/* Text */}
          <p className="mt-8 text-lg text-sky-600">
            Analyzing weather conditions to suggest the best activities...
          </p>
        </div>
      </div>
    );
  }
  