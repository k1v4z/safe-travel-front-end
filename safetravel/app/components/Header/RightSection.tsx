import React, { useContext } from "react";
import Image from "next/image";
import { AuthContext } from "@/app/contexts/AuthProvider";
const RightSection = () => {
  const authContext = useContext(AuthContext);
  let username = "";
  if (typeof window !== "undefined") {
    username = localStorage.getItem("username") || "";
  }

  return (
    <div className="hidden md:flex items-center space-x-2">
      <div className="font-poppins font-bold">
        {authContext?.authenticated ? `Hi ${username}` : "My Account"}
      </div>
      <div className="flex items-center space-x-4">
        <i className="fa fa-phone text-black text-lg"></i>
        <div className="font-poppins font-bold flex">
          <Image
            src={"/pictures/tele-icon.png"}
            alt=""
            width={25}
            height={25}
          />
          +123456789
        </div>
        <Image
          src={"/pictures/internet-icon.png"}
          width={25}
          height={25}
          alt=""
        />
      </div>
      <div className="flex items-center">
        <i className="ri-global-line text-lg"></i>
        <div className="border-l-2 pl-2 font-poppins font-bold">EN</div>
      </div>
    </div>
  );
};

export default RightSection;
