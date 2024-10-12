import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#D2FBFD]">
      {/* Navbar */}
      <nav className="flex justify-between items-center h-[130px] px-10 border-b border-dashed border-gray-300">
        <div className="flex items-center">
          <div className="mr-8 filter brightness-[-150%]">
            <Image src="/pictures/logo-removebg-preview.png" alt="Logo" width={150} height={50} />
          </div>
          <div className="flex space-x-8">
            <div className="hover:border-b-4 border-orange-400 cursor-pointer">About</div>
            <div className="hover:border-b-4 border-orange-400 cursor-pointer">Home</div>
            <div className="hover:border-b-4 border-orange-400 cursor-pointer">Planning</div>
            <div className="hover:border-b-4 border-orange-400 cursor-pointer">Forum</div>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div>Account</div>
          <div className="flex items-center space-x-2">
            <i className="fa fa-phone text-red-500 text-[20px]"></i>
            <div>+123456789</div>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-global-line text-[20px]"></i>
            <div className="pl-2 border-l-2 border-black">EN</div>
          </div>
        </div>
      </nav>

      {/* Background Image */}
      <div className="relative">
        <Image src="/pictures/map.png" alt="Background" layout="fill" objectFit="cover" className="brightness-[1.8]" />
      </div>

      {/* Header Section */}
      <header className="grid grid-cols-2 h-[500px]">
        <div className="flex flex-col justify-center ml-12">
          <p className="text-[100px] font-gideon-roman cursor-pointer leading-[100px]">Personalize your travel planning with STA</p>
          <p className="mt-5 text-gray-600 ml-12">The traveller where you can select your desired activity and destinations of your choice for vacation.</p>
        </div>
        <div className="relative">
          <Image src="/pictures/boat-removebg-preview.png" alt="Boat" width={500} height={500} className="absolute right-12" />
        </div>
      </header>

      {/* Features Section */}
      <div className="flex justify-between mx-[100px] mt-[100px]">
        {[
          { icon: "ri-map-pin-line", text: "Get personalized recs with AI" },
          { icon: "ri-heart-line", text: "Save hotels, restaurants, and more" },
          { icon: "ri-newspaper-line", text: "See your saves on your custom map" },
          { icon: "ri-group-line", text: "Share and collab with your travel buds" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-[70px] h-[70px] bg-gray-300 rounded-full flex items-center justify-center">
              <i className={`${item.icon} text-[45px]`}></i>
            </div>
            <div className="mt-3 text-center w-[160px] text-sm">{item.text}</div>
          </div>
        ))}
      </div>

      {/* Posters Section */}
      <div className="grid grid-cols-2 gap-[70px] mx-[100px] mt-[100px]">
        {[
          { imgSrc: "/pictures/pic1.webp", title: "Start a trip in minutes with AI", description: "Answer four short questions and get personalized recs with AI, guided by traveler opinions." },
          { imgSrc: "/pictures/pic2.webp", title: "Build your trip from scratch", description: "Browse top destinations, restaurants, and things to do and save your faves to your itinerary as you go." }
        ].map((poster, idx) => (
          <div key={idx} className="p-[30px] bg-[#DEEBF4] rounded-md">
            <Image src={poster.imgSrc} alt={poster.title} width={600} height={400} className="mb-2" />
            <div className="text-[40px] leading-[40px] mb-2">{poster.title}</div>
            <p className="text-[18px]">{poster.description}</p>
            <div className="flex justify-center mt-10">
              <button className="px-6 py-3 text-[20px] border rounded-md hover:bg-orange-400 hover:text-white">Try AI Trip builder</button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="grid grid-cols-[400px_1fr] items-center h-[300px] bg-[#326D7B] mt-[50px]">
        <div className="ml-[50px]">
          <Image src="/pictures/logo-removebg-preview.png" alt="Footer Logo" width={250} height={50} />
        </div>
        <div className="flex gap-16 text-white">
          <div>
            <p className="font-bold">Services</p>
            <p>Home</p>
            <p>Planning</p>
            <p>Forum</p>
            <p>Weather Forecast</p>
          </div>
          <div>
            <p className="font-bold">Company</p>
            <p>About</p>
            <p>Career</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p className="font-bold">Help</p>
            <p>FAQ</p>
            <p>Help support</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
