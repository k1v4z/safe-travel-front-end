"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import useValidation from '../hooks/useValidation';
import { useRouter } from 'next/navigation';



const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isAgreePrivacyPolicy, setIsAgreePrivacyPolicy] = useState(false)
  const router = useRouter()

  const {
    validateUsername,
    validatePassword,
    usernameErrors,
    passwordErrors,
    usernameTouched,
    passwordTouched,
  } = useValidation()

  const redirectToLogin = () => {
    const timeoutId = setTimeout(() => {
      router.push('/login')
    },1000)

     return () => clearTimeout(timeoutId);
  }

  const handleSignUp = async(e: React.FormEvent) => {
    e.preventDefault()
    setErrMessage('') //clear message if user check again
    if(!isAgreePrivacyPolicy){
      setErrMessage('Please agree to the Terms of use and Privacy Policy.')
      return;
    }

    if(password != confirmPassword){
      setErrMessage("Password don't match")
      return;
    }

    if(!validateUsername(username) || !validatePassword(password)){
      setErrMessage("Username or password is invalid")
      return;
    }

    // Prepare the form data using URLSearchParams for x-www-form-urlencoded
    const formData = new URLSearchParams();
    formData.append('username', username.trim());
    formData.append('password', password.trim());
    try {
      // Call your API to register the user
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sign-up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      const data = await response.json();

      if (data.code == 'REG01') {
        // Handle success response
        setSuccessMessage(data.message);
        setErrMessage(''); // Clear any error messages
        redirectToLogin()
      } else {
        // Handle error response
        setErrMessage(data.message);
        setSuccessMessage('');
      }
    } catch (error) {
      console.log(error);
      
      setErrMessage('Network error. Please try again later.');
      setSuccessMessage('');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#c1d5d3] p-8">
      <div className="bg-white w-full max-w-lg mx-auto p-8 rounded-lg shadow-lg relative">
        <button className="absolute top-4 right-4 text-gray-600 font-bold">
          X
        </button>
        <div className="flex justify-center items-center mb-5">
          <div className="relative w-12 h-12 mr-2 brightness-[-150%]">
            <Image
              src="/pictures/safetravel.png" // Assuming logo.webp is in the public folder
              alt="logo"
              fill
            />
          </div>
          <h1 className="text-2xl font-semibold">Create an account</h1>
        </div>
        <form className="space-y-6" onSubmit={handleSignUp}>
          <div>
            <label className="block text-sm text-gray-600">Username</label>
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value)
                validateUsername(e.target.value)
              }}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              onChange={(e) => {
                setPassword(e.target.value)
                validatePassword(e.target.value)
              }}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="flex justify-between text-sm text-gray-600">
              <span>Enter password again</span>
              <span
                className="cursor-pointer text-gray-500"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </span>
            </label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
              }}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-600 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-20 text-xs text-gray-600">
            <div>
              <p className={`
                ${!usernameTouched || !passwordTouched ? 'text-gray-600' : usernameErrors.length || passwordErrors.length ? 'text-red-600' : 'text-green-600'}`
              }>&bull; Use 6-255 characters</p>
              <p className={`${!passwordTouched ? 'text-gray-600' : passwordErrors.uppercase ? 'text-red-600' : 'text-green-600'}`}>&bull; Use upper case letters (e.g. Aa)</p>
            </div>
            <div>
              <p className={`${!passwordTouched ? 'text-gray-600' : passwordErrors.number ? 'text-red-600' : 'text-green-600'}`}>&bull; Use a number (e.g 1234)</p>
              <p className={`${!passwordTouched ? 'text-gray-600' : passwordErrors.symbol ? 'text-red-600' : 'text-green-600'}`}>&bull; Use a symbol (e.g !@#$)</p>
            </div>
          </div>
           {/* Display error message */}
          {errorMessage && (
            <div className="text-red-600 text-sm flex justify-center">
              {errorMessage}
            </div>
          )}
          
          {/* Display success message */}
          {successMessage && (
            <div className="text-green-600 text-sm flex justify-center">
              {successMessage}
            </div>
          )}
          <div>
            <button className="w-full py-3 text-white bg-black rounded-md hover:bg-gray-800 transition-colors">
              Sign in
            </button>
          </div>
          <div className="flex items-center text-xs text-gray-600 mt-2">
            <input type="checkbox" onChange={() => {
                if(isAgreePrivacyPolicy){
                  setIsAgreePrivacyPolicy(false)
                }else{
                  setIsAgreePrivacyPolicy(true)
                }
            }} className="mr-2" />
            <p>
              By creating an account, you agree to the{' '}
              <span className="underline cursor-pointer">Terms of use</span> and{' '}
              <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
          <div className="text-center text-sm mt-4">
            <p>
              Already have an account?{' '}
              <a href="/login" className="underline text-black hover:text-gray-700">
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;


