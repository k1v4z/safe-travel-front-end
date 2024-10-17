import React, { useContext, useState } from "react";
import Image from "next/image";
import { AuthContext } from "@/app/contexts/AuthProvider";
import Link from "next/link";
import DropDownProfile from "./DropDownProfile";
const RightSection = () => {
  const authContext = useContext(AuthContext);
  let username = "";
  if (typeof window !== "undefined") {
    username = localStorage.getItem("username") || "";
  }
  const [isOpen, setIsOpen] = useState(false)

  const toggleProfileMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="hidden md:flex items-center space-x-2">
      <div className="flex items-center space-x-4">
        <i className="fa fa-phone text-black text-lg"></i>
        <div className="font-poppins font-bold flex">
          <Image
            src={"/pictures/tele-icon.png"}
            alt=""
            width={25}
            height={25}
          />
          0354289547
        </div>
        <Image
          src={"/pictures/internet-icon.png"}
          width={25}
          height={25}
          alt=""
        />
      </div>
      <div className="flex items-center gap-1">
        <div className=" pl-2 font-poppins font-bold">EN</div>
        <i className="ri-global-line text-lg"></i>
       {
        authContext?.authenticated ? 
        <Image onClick={toggleProfileMenu} className="cursor-pointer border-l-2 pl-2" src={"/pictures/icons/general/logged-icon.png"} width={40} height={40} alt="avatar"/> :
        <Link href={"/login"}>
          <div className="border-l-2 pl-2 font-poppins font-bold cursor-pointer">Login</div>
        </Link>
       }
       <div className="relative">
          {isOpen && <DropDownProfile/>}
       </div>
      </div>
    </div>
  );
};

export default RightSection;
