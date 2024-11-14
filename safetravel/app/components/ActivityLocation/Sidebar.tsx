import React from 'react';

interface SidebarProps {
    activeMenu: string;
    setActiveMenu: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, setActiveMenu }) => (
    <aside className="w-1/5 bg-gray-100 p-4 flex flex-col justify-between">
        <div>
            <p className="text-[#326D7B] font-bold mb-4">Menu</p>
            <ul>
                {['Dashboard', 'Trip Location', 'Post', 'User', 'Setting'].map((item) => (
                    <li
                        key={item}
                        className={`mb-4 menu-item font-roboto font-semibold pl-4 rounded-md ${activeMenu === item ? 'text-[#326D7B] font-bold' : 'text-[#81949D]'
                            }`}
                        onClick={() => setActiveMenu(item)}
                    >
                        <a href="#" className="flex items-center">
                            {/* <i className={`fas fa-${item === 'Dashboard' ? 'tachometer-alt' : item === 'Trip Location' ? 'map-marker-alt' : item === 'Post' ? 'edit' : item === 'User' ? 'user' : 'cog'} mr-2`}></i> {item} */}
                            <i
                                className={`mr-2`}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundImage: `url(${item === 'Dashboard' ? '/pictures/dashboard_icon.png' :
                                        item === 'Trip Location' ? '/pictures/TripLocation_icon.png' :
                                            item === 'Post' ? '/pictures/post_icon.png' :
                                                item === 'User' ? '/pictures/User_icon.png' :
                                                    '/pictures/setting_icon.png'
                                        })`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            ></i>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex items-center">
            <img src="/pictures/ava_dashboard.png" alt="User Avatar" className="rounded-full mr-2" />
            <div>
                <p className="text-[#332821]">Anh Phuong</p>
                <p className="text-gray-500 text-sm">Account Settings</p>
            </div>
        </div>
    </aside >
);

export default Sidebar;
