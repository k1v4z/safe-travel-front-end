import React from "react";

export default function AccountInformationForm() {
  return (
    <form>
      {/* Avatar Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          <img
            src="/pictures/ava.png"
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-4 border-blue-100"
          />
          <label
            htmlFor="upload-avatar"
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 16l7-7 7 7"
              />
            </svg>
          </label>
          <input
            id="upload-avatar"
            type="file"
            className="hidden"
            accept="image/*"
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">Edit your profile quickly</p>
      </div>
      {/* Username Field */}
      <div className="mb-6">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          value="ashleytran2510"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
        />
      </div>
      {/* Fullname Field */}
      <div className="mb-6">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="fullname"
        >
          Fullname
        </label>
        <input
          type="text"
          id="fullname"
          value="Ashley Tran"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
        />
      </div>
      {/* Save Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-2 bg-teal-400 text-white font-medium rounded-full shadow-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300"
        >
          Save
        </button>
      </div>
    </form>
  );
}
