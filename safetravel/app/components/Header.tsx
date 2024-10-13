"use client"
import Image from 'next/image';
import Link from 'next/link'
import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const authContext = useContext(AuthContext);
  let username = ''
  if (typeof window !== "undefined") {
    username = localStorage.getItem('username') || ""
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="bg-[#D2FBFD] border-b border-dashed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Image width={100} height={100} src="/pictures/logo-removebg-preview.png" alt="Logo" className="w-35 brightness-0" />
          </div>

          <div className="hidden md:flex md:space-x-8 items-center">
            <Link href="/about" legacyBehavior={true}>
              <a className="border-b-2 border-[#b12b2b] font-bold font-poppins">About</a>
            </Link>
            <Link href="/" legacyBehavior={true}>
              <a className="hover:border-b-2 border-[#b12b2b] font-bold font-poppins">Home</a>
            </Link>
            <Link href="/planning" legacyBehavior={true}>
              <a className="hover:border-b-2 border-[#b12b2b] font-bold font-poppins">Planning</a>
            </Link>
            <Link href="/forum" legacyBehavior={true}>
              <a className="hover:border-b-2 border-[#b12b2b] font-bold font-poppins">Forum</a>
            </Link>
            <Link href="/forum" legacyBehavior={true}>
              <a className="hover:border-b-2 border-[#b12b2b] font-bold font-poppins">Weather</a>
            </Link>
          </div>

          {/* Right side of the header */}
          <div className="hidden md:flex items-center space-x-2">
            <div className='font-poppins font-bold'>
              {
                authContext?.authenticated ? `Hi ${username}` : "My Account"
              }
            </div>
            <div className="flex items-center space-x-4">
              <i className="fa fa-phone text-black text-lg"></i>
              <div className='font-poppins font-bold flex'>
                <Image src={'/pictures/tele-icon.png'} alt='' width={25} height={25}/>
                +123456789
              </div>
              <Image src={'/pictures/internet-icon.png'} width={25} height={25} alt=''/>
            </div>
            <div className="flex items-center">
              <i className="ri-global-line text-lg"></i>
              <div className="border-l-2 pl-2 font-poppins font-bold">EN</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-200 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <Link href="/about" legacyBehavior={true}>
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:border-b-2 border-black">About</a>
            </Link>
            <Link href="/" legacyBehavior={true}>
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:border-b-2 border-black">Home</a>
            </Link>
            <Link href="/planning" legacyBehavior={true}>
              <a className="block px-3 py-2 rounded-md text-base font-medium border-b-2 border-black">Planning</a>
            </Link>
            <Link href="/forum" legacyBehavior={true}>
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:border-b-2 border-black">Forum</a>
            </Link>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center space-x-6">
              <div>Account</div>
              <div className="flex items-center space-x-2">
                <i className="fa fa-phone text-red-600 text-lg"></i>
                <div>+123456789</div>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-global-line text-lg"></i>
                <div className="border-l-2 pl-2">EN</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
