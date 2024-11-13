"use client";
import React, { useState, useEffect } from "react";
import "../components/ActivityLocation/Location.css";
import Header from "../components/ActivityLocation/Header";
import Sidebar from "../components/ActivityLocation/Sidebar";
import AddLocationModal from "../components/ActivityLocation/AddLocationModal";
import EditModal from "../components/ActivityLocation/EditModal";
import DeleteModal from "../components/ActivityLocation/DeleteModal";

const Trip: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState("Trip Location");
    const [activePage, setActivePage] = useState(1);
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [addLocation, setAddLocation] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<Location | null>(null);
    const [deleteItem, setDeleteItem] = useState<Location | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchLocations();
                setLocations(response);
            } catch (error) {
                setError("An error occurred. Please try again.");
            }
        };
        fetchData();
    }, [activePage]);
    
    const fetchLocations = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/activity-locations?page=${activePage}&limit=10`
            );
            if (!response.ok) {
                throw new Error("Error fetching locations");
            }
            const data = await response.json();
            console.log(data)
            console.log(data.results.locations);
            return data.results.locations;
        } catch (error) {
            setError("An error occurred. Please try again.");
            return null;
        } finally {
            setLoading(false);
        }
    };
    

    const renderContent = () => {
        switch (activeMenu) {
            case "Dashboard":
                return <Dashboard />;
            case "Trip Location":
                return (
                    <TripLocation
                        locations={locations}
                        activePage={activePage}
                        setActivePage={setActivePage}
                        fetchLocations={fetchLocations}
                        setAddLocation={setAddLocation}
                        setEditItem={setEditItem}
                        setDeleteItem={setDeleteItem}
                    />
                );
            case "Post":
                return <Post />;
            case "User":
                return <User />;
            case "Setting":
                return <Setting />;
            default:
                return (
                    <TripLocation
                        locations={locations}
                        activePage={activePage}
                        setActivePage={setActivePage}
                        fetchLocations={fetchLocations}
                        setAddLocation={setAddLocation}
                        setEditItem={setEditItem}
                        setDeleteItem={setDeleteItem}
                    />
                );
        }
    };

    return (
        <div className="flex h-screen flex-col">
            <div className="flex flex-1">
                <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                <main className="flex-1 bg-[#326D7B] p-5 flex flex-col justify-between">
                    <Header activeMenu={activeMenu} />
                    <div className="bg-white p-4 rounded shadow flex flex-col justify-between mt-0 h-full" style={{ borderRadius: "9px" }}>
                        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : renderContent()}
                    </div>
                    {addLocation && <AddLocationModal setAddLocation={setAddLocation} item={null} />}
                    {editItem && <EditModal item={editItem} setEditItem={setEditItem} />}
                    {deleteItem && <DeleteModal item={deleteItem} setDeleteItem={setDeleteItem} />}
                </main>
            </div>
        </div>
    );
};

interface Location {
    id?: string;
    name: string;
    locationType: string;
    open_at: string;
    close_at: string;
    address: string;
}

const Dashboard: React.FC = () => (
    <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
        <p>Dashboard content goes here...</p>
    </div>
);

const TripLocation: React.FC<{
    locations: Location[];
    activePage: number;
    setActivePage: React.Dispatch<React.SetStateAction<number>>;
    fetchLocations: () => void;
    setAddLocation: React.Dispatch<React.SetStateAction<boolean>>;
    setEditItem: React.Dispatch<React.SetStateAction<Location | null>>;
    setDeleteItem: React.Dispatch<React.SetStateAction<Location | null>>;
}> = ({ locations, activePage, setActivePage, fetchLocations, setAddLocation, setEditItem, setDeleteItem }) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center w-3/4">
                    <div className="bg-gray-100 p-2 rounded flex items-center mr-4" style={{ borderRadius: "10px", width: "344px", height: "36px" }}>
                        <i className="fas fa-search text-gray-500 mr-2"></i>
                        <input type="text" placeholder="Search in Trip Location" className="bg-gray-100 outline-none w-full" />
                    </div>
                    <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded flex items-center" style={{ borderRadius: "10px" }}>
                        <i className="fas fa-filter mr-2"></i> Filter
                    </button>
                </div>
                <button className="bg-[#326D7B] text-white py-2 px-4 rounded" style={{ borderRadius: "25px" }} onClick={() => setAddLocation(true)}>
                    + Add Location
                </button>
            </div>
            <table className="w-full bg-white rounded shadow table-font">
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                        <th className="p-4 flex items-center">
                            <input type="checkbox" />
                        </th>
                        <th className="p-4">Location Name</th>
                        <th className="p-4">Type</th>
                        <th className="p-4">Open at</th>
                        <th className="p-4">Close at</th>
                        <th className="p-4">Address</th>
                        <th className="p-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(locations) && locations.length > 0 ? (
                        locations.map((location) => (
                            <tr key={location.id} className="border-b">
                                <td className="p-4">
                                    <input type="checkbox" />
                                </td>
                                <td className="p-4 flex items-center">
                                    <img src={"/pictures/HoaLo.png"} alt={location.name} className="rounded mr-2" style={{ width: "50px", height: "50px" }} />
                                    {location.name || "Unknown Location"}
                                </td>
                                <td className="p-4">{location.locationType || "N/A"}</td>
                                <td className="p-4">{location.open_at || "N/A"}</td>
                                <td className="p-4">{location.close_at || "N/A"}</td>
                                <td className="p-4">{location.address || "N/A"}</td>
                                <td className="p-4">
                                    <div className="dropdown">
                                        <i className="fas fa-ellipsis-h cursor-pointer"></i>
                                        <div className="dropdown-content">
                                            <a href="#" onClick={() => setEditItem(location)}>Edit</a>
                                            <a href="#" onClick={() => setDeleteItem(location)}>Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7} className="text-center p-4">No locations found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                <button className="pagination-button" onClick={() => activePage > 1 && setActivePage(activePage - 1)}>
                    &lt;
                </button>
                {[1, 2, 3, 4].map((page) => (
                    <button key={page} className={`pagination-button ${activePage === page ? 'active' : ''}`} onClick={() => setActivePage(page)}>
                        {page}
                    </button>
                ))}
                <button className="pagination-button" onClick={() => setActivePage(activePage + 1)}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

const Post: React.FC = () => <div>Post content goes here...</div>;
const User: React.FC = () => <div>User content goes here...</div>;
const Setting: React.FC = () => <div>Setting content goes here...</div>;

export default Trip;
