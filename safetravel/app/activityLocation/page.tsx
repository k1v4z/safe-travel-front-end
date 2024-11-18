"use client";
import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "../components/ActivityLocation/Header";
import Sidebar from "../components/ActivityLocation/Sidebar";
import AddLocationModal from "../components/ActivityLocation/AddLocationModal";
import EditModal from "../components/ActivityLocation/EditModal";
import DeleteModal from "../components/ActivityLocation/DeleteModal";

const Trip: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState("Trip Location");
    const [activePage, setActivePage] = useState(1);
    const [locations, setLocations] = useState<Location[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [addLocation, setAddLocation] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<Location | null>(null);
    const [deleteItem, setDeleteItem] = useState<Location | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { locations, totalPages } = await fetchLocations();
                setLocations(locations);
                setTotalPages(totalPages);
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
                `${process.env.NEXT_PUBLIC_API_URL}/activity-locations?page=${activePage}&limit=4`
            );
            if (!response.ok) {
                throw new Error("Error fetching locations");
            }
            const data = await response.json();
            return {
                locations: data.results.locations,
                totalPages: data.results.totalPages,
            };
        } catch (error) {
            setError("An error occurred. Please try again.");
            return { locations: [], totalPages: 1 };
        } finally {
            setLoading(false);
        }
    };

    const renderPagination = () => {
        const paginationButtons = [];
        const maxVisiblePages = 3;

        const startPage = Math.max(1, activePage - Math.floor(maxVisiblePages / 2));
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (activePage > 1) {
            paginationButtons.push(
                <button
                    key="prev"
                    className="pagination-button rounded-full px-4 py-2 mx-1 bg-[#f0f0f0]"
                    onClick={() => setActivePage(activePage - 1)}
                >
                    &lt;
                </button>
            );
        }

        for (let page = startPage; page <= endPage; page++) {
            paginationButtons.push(
                <button
                    key={page}
                    className={`pagination-button rounded-full px-4 py-2 mx-1 ${activePage === page ? "bg-custom-blue text-white font-bold" : "bg-[#f0f0f0]"
                        }`}
                    onClick={() => setActivePage(page)}
                >
                    {page}
                </button>
            );
        }

        if (activePage < totalPages) {
            paginationButtons.push(
                <button
                    key="next"
                    className="pagination-button rounded-full px-4 py-2 mx-1 bg-[#f0f0f0]"
                    onClick={() => setActivePage(activePage + 1)}
                >
                    &gt;
                </button>
            );
        }

        return <div className="flex justify-center mt-4">{paginationButtons}</div>;
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
                        totalPages={totalPages}
                        renderPagination={renderPagination}
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
                        totalPages={totalPages}
                        renderPagination={renderPagination}
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
    imageUrl: string;
    locationOnTypes: { type: { name: string } }[];
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
    totalPages: number;
    renderPagination: () => JSX.Element;
    setAddLocation: React.Dispatch<React.SetStateAction<boolean>>;
    setEditItem: React.Dispatch<React.SetStateAction<Location | null>>;
    setDeleteItem: React.Dispatch<React.SetStateAction<Location | null>>;
}> = ({ locations, renderPagination, setAddLocation, setEditItem, setDeleteItem }) => {
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
                                    <img src={location.imageUrl} alt={location.name} className="rounded mr-2" style={{ width: "50px", height: "50px" }} />
                                    <span>{location.name}</span>
                                </td>
                                <td className="p-4 text-center">{location.locationOnTypes.map((t) => t.type.name).join(", ")}</td>
                                <td className="p-4 text-center">{location.open_at}</td>
                                <td className="p-4 text-center">{location.close_at}</td>
                                <td className="p-4">{location.address}</td>
                                <td className="p-4">
                                    <div className="relative inline-block group">
                                        <i className="fas fa-ellipsis-h cursor-pointer"></i>
                                        <div className="dropdown-content hidden bg-white fixed shadow-lg z-10 rounded-lg group-hover:block">
                                            <a href="#" onClick={() => setEditItem(location)} className="text-black py-2 px-3 block no-underline hover:bg-gray-200">
                                                Edit
                                            </a>
                                            <a href="#" onClick={() => setDeleteItem(location)} className="text-black py-2 px-3 block no-underline hover:bg-gray-200">
                                                Delete
                                            </a>
                                        </div>
                                    </div>

                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7} className="text-center py-4">
                                No locations found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {renderPagination()}
        </div>
    );
};

const Post: React.FC = () => (
    <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold text-gray-700">Post</h1>
        <p>Post content goes here...</p>
    </div>
);

const User: React.FC = () => (
    <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold text-gray-700">User</h1>
        <p>User content goes here...</p>
    </div>
);

const Setting: React.FC = () => (
    <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold text-gray-700">Setting</h1>
        <p>Setting content goes here...</p>
    </div>
);

export default Trip;