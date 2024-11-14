import React, { useState } from "react";

interface Location {
    id?: string;
    name: string;
    imageUrl: string;
    locationType: string;
    open_at: string;
    close_at: string;
    address: string;
    longitude?: number;
    latitude?: number;
}
interface ModalProps {
    item: Location | null;
    setAddLocation?: React.Dispatch<React.SetStateAction<boolean>>;
    setEditItem?: React.Dispatch<React.SetStateAction<Location | null>>;
    setDeleteItem?: React.Dispatch<React.SetStateAction<Location | null>>;
}
const AddLocationModal: React.FC<ModalProps> = ({ setAddLocation }) => {
    const [formData, setFormData] = useState<Location>({
        name: "",
        imageUrl: "",
        locationType: "",
        open_at: "",
        close_at: "",
        address: "",
        longitude: 0,
        latitude: 0
    });

    const options = ["Accomodation", "Food", "Museum", "Visit"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleClose = () => {
        if (setAddLocation) setAddLocation(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // const defaultLongitude = 0.0;
        // const defaultLatitude = 0.0;

        // const locationData = {
        //     ...formData,
        //     longitude: defaultLongitude,
        //     latitude: defaultLatitude
        // };
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity-location`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (response.ok) {
                console.log('Location added successfully:', result);
                window.location.reload();
            } else {
                console.log('Error:', result);
            }
        } catch (error) {
            console.error("Error creating location:", error);
            alert("An error occurred. Please try again.");
        }
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Tạo URL cho file ảnh
            setFormData((prevData) => ({
                ...prevData,
                imageUrl,
            }));
        }
    };

    return (
        <div className="fixed z-10 inset-0 overflow-auto bg-gray-900 bg-opacity-50 pt-16 hidden" style={{ display: "block" }}>
            <div className="bg-white mx-auto p-4 border border-gray-300 rounded-lg w-[720px] relative">
                {/* Close Button */}
                <span
                    className="absolute top-2 right-2 text-3xl text-gray-600 cursor-pointer hover:text-black focus:outline-none"
                    onClick={handleClose}
                >
                    &times;
                </span>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Location</h2>

                <form onSubmit={handleSubmit}>
                    {/* Location Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Location Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageFile">Image</label>
                        <div className="flex items-center">
                            <input
                                type="file"
                                id="imageFile"
                                name="imageFile"
                                accept="image/*"
                                onChange={handleFileChange}  
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => document.getElementById('imageFile')?.click()}  
                                className="shadow appearance-none border rounded py-2 px-4 bg-[#326D7B] text-white font-bold hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                Select Image
                            </button>
                            {formData.imageUrl && (
                                <img src={formData.imageUrl} alt="Preview" className="ml-4 w-16 h-16 object-cover rounded" />
                            )}
                        </div>
                    </div>

                    {/* Location Type */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="locationType">
                            Type
                        </label>
                        <select
                            id="locationType"
                            name="locationType"
                            value={formData.locationType}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="" disabled>Select Type</option>
                            {options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Open At */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="open_at">
                            Open At
                        </label>
                        <input
                            type="text"
                            id="open_at"
                            name="open_at"
                            value={formData.open_at}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Close At */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="close_at">
                            Close At
                        </label>
                        <input
                            type="text"
                            id="close_at"
                            name="close_at"
                            value={formData.close_at}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-[#326D7B] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddLocationModal;
