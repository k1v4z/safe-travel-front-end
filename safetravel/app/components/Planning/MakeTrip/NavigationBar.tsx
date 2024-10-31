import React from 'react'

const NavigationBar = () => {
  return (
    <nav className="bg-transparent py-4 border-b border-dashed border-gray-300 cursor-pointer">
        <ul className="flex space-x-6 text-sm text-gray-800 font-poppins font-bold">
            <li>My Plan</li>
            <li>Itinerary</li>
            <li>For you</li>
        </ul>
    </nav>
  )
}

export default NavigationBar
