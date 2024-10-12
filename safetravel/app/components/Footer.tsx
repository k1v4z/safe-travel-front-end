import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#326D7B] text-white p-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <img src="/pictures/logo-removebg-preview.png" alt="Logo" className="w-56 mb-5 md:mb-0 brightness-[70%]" />
          <div className="w-full md:w-auto flex justify-around md:justify-between gap-10 text-center md:text-left">
            <div>
              <p className="font-bold mb-3 font-inter">Services</p>
              <p className='font-inter text-[#E6E6E6]'>Home</p>
              <p className='font-inter text-[#E6E6E6]'>Planning</p>
              <p className='font-inter text-[#E6E6E6]'>Forum</p>
              <p className='font-inter text-[#E6E6E6]'>Weather Forecast</p>
            </div>
            <div>
              <p className="font-bold mb-3 font-inter">Company</p>
              <p className='font-inter text-[#E6E6E6]'>About</p>
              <p className='font-inter text-[#E6E6E6]'>Career</p>
              <p className='font-inter text-[#E6E6E6]'>Contact Us</p>
            </div>
            <div>
              <p className="font-bold mb-3 font-inter">Help</p>
              <p className='font-inter text-[#E6E6E6]'>FAQ</p>
              <p className='font-inter text-[#E6E6E6]'>Help Support</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

