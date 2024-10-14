import React from "react";

interface IButtonMenuProps{
    isOpen: boolean,
    setIsOpen(isOpen: boolean): void
}

const Button = (props: IButtonMenuProps) => {

  return (
    <div className="-mr-2 flex md:hidden">
      <button
        onClick={() => props.setIsOpen(!props.isOpen)} //toggle menu
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-200 focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={props.isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </div>
    
  );
};

export default Button;
