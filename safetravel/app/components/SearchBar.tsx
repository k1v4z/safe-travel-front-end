import React from 'react'

const SearchBar = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto flex items-center justify-end mt-6 mb-8 relative">
        <input
          type="text"
          placeholder="Search.."
          className="border border-gray-300 rounded-full px-5 py-2 w-full md:w-80 focus:outline-none shadow-md text-sm"
        />
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#62f0df] w-10 h-10 rounded-full flex items-center justify-center hover:bg-cyan-600 transition duration-300">
          <img src="/pictures/search.svg" alt="Search" className="w-5" />
        </button>
    </div>
  )
}

export default SearchBar
