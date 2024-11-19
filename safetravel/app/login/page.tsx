"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMessage, setErrMessage] = useState('')
  const router = useRouter()
  const authContext = useContext(AuthContext)

  useEffect(() => {  
    if(authContext?.authenticated){
      router.push('/')  
    }
  })

  if(authContext?.authenticated){
    return null
  }

  const handleLogin = async () => {
    const formData = new URLSearchParams();
    formData.append('username', username.trim());
    formData.append('password', password.trim());
   
    try {
      // Call your API to login here
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      const data = await response.json();
      console.log(data);
      
      const username = data?.payload?.username
      const userId = data?.payload?.userId
      
      if (data.code == 'LOG01') {
        authContext?.setAuth(true)
        localStorage.setItem('username', username)
        localStorage.setItem('userId', userId)
        setErrMessage(''); 
        router.push('/') 
        
      } else if(data.code == 'LOG03'){
        console.log('admin')
      } 
      else{
        // Handle error response
        setErrMessage(data.message);
      }
    } catch (error) {
      console.log(error);
      setErrMessage('Network error. Please try again later.');
    }
  }

    return (
      <div className="min-h-screen bg-[#5fb6aa40] flex items-center justify-center">
        <div className="bg-white w-[450px] flex flex-col items-center rounded-lg relative p-6">
          <Image
            className="w-24 absolute top-0 left-0 -mt-4 -ml-4 filter brightness-[-150%]"
            src="/pictures/logo-removebg-preview.png"
            alt="logo"
            width={100}
            height={100}/>
          <button className="absolute top-3 right-3 text-gray-400 font-bold">X</button>
          <div className="mt-10 mb-4">
          <Image className="w-10 rounded-full" src="/pictures/meo2.webp" alt="profile" width={30} height={30} />
        </div>
          <div className="text-lg font-medium">Log in</div>
            <div className="text-xs text-gray-500 py-2">
              Don&apos;t have an account?{" "}
              <a href='/register' className="underline cursor-pointer">Sign up</a>
            </div>
          <div className="flex justify-center items-center w-full border border-gray-300 rounded-[24px] py-2 px-4 mb-3 cursor-pointer">
            <Image className="w-9 mr-2" src="/pictures/facebook-icon.png" alt="Facebook" width={35} height={35} />
            <span className="text-gray-700 text-sm">Login with Facebook</span>
          </div>
  
        <div className="flex justify-center items-center w-full border border-gray-300 rounded-[24px] py-2 px-4 mb-3 cursor-pointer">
          <Image className="w-9 mr-2" src="/pictures/google-icon.png" alt="Google" width={35} height={35} />
          <span className="text-gray-700 text-sm">Login with Google</span>
        </div>
  
          <div className="flex items-center justify-center w-full my-4">
            <span className="border-b border-gray-300 w-full"></span>
            <span className="text-gray-500 mx-4 text-sm">OR</span>
            <span className="border-b border-gray-300 w-full"></span>
          </div>
  
          <div className="w-full">
            <label className="block text-gray-500 text-xs mb-1">Username</label>
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-3"
            />
          </div>
  
          <div className="w-full">
            <div className="flex justify-between text-gray-500  text-xs mb-1">
              <span>Your password</span>
              <span className="cursor-pointer" onClick={() => {
                setPasswordVisible(!passwordVisible)
              }}>{passwordVisible ? 'Hide' : 'Show'}</span>
            </div>
            <input
              type={passwordVisible ? 'text' : 'password'}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-3"
            />
          </div>
  
          <div className="w-full text-right text-xs hover:underline text-gray-500 mb-4 cursor-pointer">
            Forget your password
          </div>
  
          <button className="w-full bg-gray-600 text-white rounded-xl py-3 hover:bg-gray-800" onClick={handleLogin}>Login</button>
          <div className='flex justify-center items-center text-red-600'>{errMessage}</div>
        </div>
      </div>
    );
  }
  