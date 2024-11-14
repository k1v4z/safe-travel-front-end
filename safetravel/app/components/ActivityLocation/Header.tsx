import React from "react";

interface HeaderProps {
    activeMenu: string;
}

const Header: React.FC<HeaderProps> = ({ activeMenu }) => (
    <header className="bg-[#326D7B] pt-0 p-4 flex justify-between items-center mb-0">
        <div className="flex items-center">
            <img src="/pictures/safetravel_Dashboard.png" alt="Logo" className="mr-2 w-[50px] rounded-full" />
            <h1 className="text-2xl font-bold text-white">{activeMenu}</h1>
        </div>
        <div className="flex items-center">
            <img src="/pictures/bell_icon.png" alt="Bell Icon" className="text-white mr-4 w-12" />
            <img src="/pictures/ava_dashboard.png" alt="User Avatar" className="-ml-3 w-12 rounded-full" />
        </div>
    </header>
);

export default Header;
