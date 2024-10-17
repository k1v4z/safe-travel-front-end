import React from "react";

const DropDownProfile = () => {
    const logout = async() => {
        console.log("Logout");
        
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

  return (
    <div className="absolute top-4 right-2 mt-2 w-24 bg-white rounded-md shadow-lg z-10">
      <ul className="py-1">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-poppins font-bold"
          >
            Trips
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-poppins font-bold"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            onClick={() => {logout()}}
            href=""    
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-poppins font-bold"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropDownProfile;
