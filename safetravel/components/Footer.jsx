import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full h-72 bg-teal-700 mt-12 grid grid-cols-2 items-center">
      <div className="ml-12">
        <Image src="/pictures/logo-removebg-preview.png" alt="Logo" width={250} height={100} />
      </div>
      <div className="flex justify-around text-white">
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
          <p>Help Support</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;