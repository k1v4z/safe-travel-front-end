import React from "react";

interface HeaderProps {
    activeMenu: string;
}

const Header: React.FC<HeaderProps> = ({ activeMenu }) => (
    <header className="flex justify-between items-center mb-0 pb-4">
        <div className="flex items-center">
            <img src="/pictures/safetravel_Dashboard.png" alt="Logo" className="mr-2 w-[50px]" />
            <h1 className="text-2xl font-bold text-white">{activeMenu}</h1>
        </div>
        <div className="flex items-center">
            {/* <i className="fas fa-bell text-white mr-4"></i> */}
            <img src="/pictures/bell_icon.png" alt="Bell Icon" className="text-white mr-4 w-12" />
            <img src="/pictures/ava_dashboard.png" alt="User Avatar" className="-ml-3 w-12" />
        </div>
    </header>
);

export default Header;
