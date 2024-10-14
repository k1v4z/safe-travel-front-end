import Link from "next/link";
import React from "react";

interface IMenuProps{
    isOpen: boolean
}

const Menu = (props: IMenuProps) => {
  return (
    <div>
      {props.isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <Link href="/about" legacyBehavior={true}>
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:border-b-2 border-black">
                About
              </a>
            </Link>
            <Link href="/" legacyBehavior={true}>
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:border-b-2 border-black">
                Home
              </a>
            </Link>
            <Link href="/planning" legacyBehavior={true}>
              <a className="block px-3 py-2 rounded-md text-base font-medium border-b-2 border-black">
                Planning
              </a>
            </Link>
            <Link href="/forum" legacyBehavior={true}>
              <a className="block px-3 py-2 rounded-md text-base font-medium hover:border-b-2 border-black">
                Forum
              </a>
            </Link>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center space-x-6">
              <div>Account</div>
              <div className="flex items-center space-x-2">
                <i className="fa fa-phone text-red-600 text-lg"></i>
                <div>+123456789</div>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-global-line text-lg"></i>
                <div className="border-l-2 pl-2">EN</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
