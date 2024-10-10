// pages/login.js
import Image from 'next/image'
export default function Login() {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-white w-[450px] flex flex-col items-center rounded-lg relative p-6">
        <Image
  className="w-24 absolute top-0 left-0 -mt-4 -ml-4 filter brightness-[-150%]"
  src="/pictures/logo-removebg-preview.png"
  alt="logo"
  width={100}
  height={100}
/>

          <button className="absolute top-3 right-3 text-gray-400 font-bold">X</button>
  
          <div className="mt-10 mb-4">
  <Image className="w-10 rounded-full" src="/pictures/meo2.webp" alt="profile" width={30} height={30} />
</div>
  
          <div className="text-lg font-medium">Log in</div>
  
          <div className="text-xs text-gray-500 py-2">
            Don&apos;t have an account?{" "}
            <span className="underline cursor-pointer">Sign up</span>
          </div>
  
          <div className="flex items-center w-full border border-gray-300 rounded-xl py-2 px-4 mb-3 cursor-pointer">
  <Image className="w-9 mr-2" src="/pictures/fb.webp" alt="Facebook" width={35} height={35} />
  <span className="text-gray-700 text-sm">Log in with Facebook</span>
</div>
  
<div className="flex items-center w-full border border-gray-300 rounded-xl py-2 px-4 mb-3 cursor-pointer">
  <Image className="w-6 mr-2" src="/pictures/gg.webp" alt="Google" width={15} height={15} />
  <span className="text-gray-700 text-sm">Log in with Google</span>
</div>
  
          <div className="flex items-center justify-center w-full my-4">
            <span className="border-b border-gray-300 w-full"></span>
            <span className="text-gray-500 mx-4 text-sm">OR</span>
            <span className="border-b border-gray-300 w-full"></span>
          </div>
  
          <div className="w-full">
            <label className="block text-gray-500 text-xs mb-1">Your email</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-3"
            />
          </div>
  
          <div className="w-full">
            <div className="flex justify-between text-gray-500 text-xs mb-1">
              <span>Your password</span>
              <span className="cursor-pointer">Hide</span>
            </div>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-3"
            />
          </div>
  
          <div className="w-full text-right text-xs text-gray-500 mb-4 cursor-pointer">
            Forget your password
          </div>
  
          <button className="w-full bg-gray-600 text-white rounded-xl py-3">Log in</button>
        </div>
      </div>
    );
  }
  