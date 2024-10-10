import React from 'react';
import Image from 'next/image';

export default function Register() {
  return (100
    <div className="bg-gray- flex flex-col items-center justify-center font-poppins h-screen">
      <div className="absolute right-12 top-5 text-sm leading-5 text-black">
        <p>Already have an account? <a className="border-b border-gray-800 hover:text-blue-500 hover:border-blue-500" href="#">Log in</a></p>
        <p><a className="hover:text-blue-500" href="#">Forget your user ID or password?</a></p>
      </div>

      <div className="bg-white w-[450px] flex flex-col items-center rounded-lg mt-5 relative shadow-lg">
        {/* Sử dụng Image component thay cho thẻ img */}
        <Image 
  className="absolute top-[-5px] left-[-17px] filter brightness-[-180%] z-10" 
  src="/pictures/logo-removebg-preview.png" 
  alt="Logo" 
  width={96} 
  height={96} 
/>
        <button className="absolute right-2 top-2 text-gray-400 font-bold text-lg">X</button>
        <div className="bg-white w-[400px] flex flex-col items-center justify-center rounded-lg border border-black mt-9 mb-4 p-6 relative">
          <div className="text-2xl mb-5">Create an account</div>
          <div className="w-full mb-8">
            <label className="text-xs text-gray-500 mb-1 block">Username</label>
            <input className="w-full p-2 rounded-lg border border-gray-300" type="text" />
          </div>
          <div className="w-full mb-8">
            <label className="text-xs text-gray-500 mb-1 block">Password</label>
            <input className="w-full p-2 rounded-lg border border-gray-300" type="password" />
          </div>
          <div className="w-full mb-8">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Enter password again</span>
              <span>Hide</span>
            </div>
            <input className="w-full p-2 rounded-lg border border-gray-300" type="password" />
          </div>
          <div className="flex justify-between text-gray-500 text-[10px] space-x-10 mb-5">
            <div>
              <p>&bull; Use 6-255 characters</p>
              <p>&bull; Use upper case letters (e.g. Aa)</p>
            </div>
            <div>
              <p>&bull; Use a number (e.g 1234)</p>
              <p>&bull; Use a symbol (e.g !@#$)</p>
            </div>
          </div>
          <button className="px-20 py-2 rounded-full bg-black text-white">Sign in</button>
          <div className="flex items-center mt-3">
            <div className="text-xs">
              By creating an account, you agree to the <span className="underline">Terms of use</span> and <span className="underline">Privacy Policy</span>
            </div>
            <input className="ml-2" type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
}
