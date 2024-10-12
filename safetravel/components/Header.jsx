import Image from 'next/image';

const Header = () => {
  return (
    <nav className="w-full h-30 flex justify-between items-center border-b border-gray-300">
      <div className="flex items-center">
        <div className="ml-4">
          <Image src="/pictures/logo-removebg-preview.png" alt="Logo" width={150} height={50} className="brightness-0" />
        </div>
        <div className="flex ml-8 space-x-8 cursor-pointer">
          <div className="border-b-4 border-transparent hover:border-yellow-500">About</div>
          <div className="border-b-4 border-transparent hover:border-yellow-500">Home</div>
          <div className="border-b-4 border-transparent hover:border-yellow-500">Planning</div>
          <div className="border-b-4 border-transparent hover:border-yellow-500">Forum</div>
        </div>
      </div>

      <div className="flex space-x-8 mr-4 items-center">
        <div>Account</div>
        <div className="flex items-center">
          <i className="fa fa-phone text-red-600"></i>
          <span className="ml-2">+123456789</span>
        </div>
        <div className="flex items-center">
          <i className="ri-global-line text-xl"></i>
          <span className="ml-2 border-l border-black pl-2">EN</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;