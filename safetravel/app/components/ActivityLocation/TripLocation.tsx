import React from "react";

interface Location {
    id?: string;
    name: string;
    imageUrl: string;
    locationOnTypes: { type: { name: string } }[];
    open_at: string;
    close_at: string;
    address: string;
}

const TripLocation: React.FC<{
    locations: Location[];
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

export default TripLocation;
