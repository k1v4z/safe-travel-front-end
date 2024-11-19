"use client";
import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import Header from "../components/ActivityLocation/Header";
import Sidebar from "../components/ActivityLocation/Sidebar";
import AddLocationModal from "../components/ActivityLocation/AddLocationModal";
import EditModal from "../components/ActivityLocation/EditModal";
import DeleteModal from "../components/ActivityLocation/DeleteModal";
import Pagination from "../components/ActivityLocation/Pagination";
import TripLocation from "../components/ActivityLocation/TripLocation";

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

    const renderContent = () => {
        switch (activeMenu) {
            case "Dashboard":
                return <Dashboard />;
            case "Trip Location":
                return (
                    <TripLocation
                        locations={locations}
                        renderPagination={() => (
                            <Pagination
                            activePage={activePage}
                            setActivePage={setActivePage}
                            totalPages={totalPages}
                            />
                        )}
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
                        renderPagination={() => (
                            <Pagination
                            activePage={activePage}
                            setActivePage={setActivePage}
                            totalPages={totalPages}
                            />
                        )}
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