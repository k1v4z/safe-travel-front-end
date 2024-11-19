import React, { useState } from "react";
import { uploadImage } from "./UploadImage";

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
        longitude: undefined,
        latitude: undefined,
    });
    const [uploadImg, setUploadImg] = useState(false);

    const [errors, setErrors] = useState({
        open_at: "",
        close_at: "",
        longitude: "",
        latitude: "",
    });

    const options = ["Accomodation", "Food", "Museum", "Visit"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "longitude" || name === "latitude"
                ? value === "" ? undefined : parseFloat(value)
                : value
        });
        switch (name) {
            case 'open_at':
            case 'close_at':
                const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
                if (!timeRegex.test(value)) {
                    setErrors({ ...errors, [name]: 'Invalid time format. Expected HH:MM.' });
                } else {
                    setErrors({ ...errors, [name]: '' });
                }
                break;
            case 'longitude':
                const longitudeValue = parseFloat(value);
                if (isNaN(longitudeValue) || longitudeValue < -180 || longitudeValue > 180) {
                    setErrors({ ...errors, [name]: 'Longitude must be between -180 and 180.' });
                } else {
                    setErrors({ ...errors, [name]: '' });
                }
                break;
            case 'latitude':
                const latitudeValue = parseFloat(value);
                if (isNaN(latitudeValue) || latitudeValue < -90 || latitudeValue > 90) {
                    setErrors({ ...errors, [name]: 'Latitude must be between -90 and 90.' });
                } else {
                    setErrors({ ...errors, [name]: '' });
                }
                break;
            default:
                break;
        }
    };


    const handleClose = () => {
        if (setAddLocation) setAddLocation(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            ...formData,
            longitude: formData.longitude ?? 0,
            latitude: formData.latitude ?? 0,
        };
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity-location`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
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
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0) return;

        const imageFile = event.target.files[0];
        setUploadImg(true);

        try {
            const imageUrl = await uploadImage(imageFile, "add-location-folder");
            setFormData((prev) => ({ ...prev, imageUrl }));
        } catch (error) {
            alert("An error occurred while uploading the image.");
        } finally {
            setUploadImg(false);
        }
    };
    return (
        <div className="fixed z-10 inset-0 overflow-auto bg-gray-900 bg-opacity-50 pt-16 flex items-center justify-center" style={{ display: "block" }}>
            <div className="bg-white mx-auto p-4 border border-gray-300 rounded-lg w-[680px] max-h-[90vh] overflow-auto relative">
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
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageFile">
                                Image
                            </label>
                            <input
                                type="file"
                                id="imageFile"
                                name="imageFile"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => document.getElementById('imageFile')?.click()}
                                className="shadow appearance-none border rounded py-2 px-4 bg-[#326D7B] text-white font-bold hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                {uploadImg ? "Uploading..." : "Select Image"}
                            </button>
                        </div>
                        {formData.imageUrl && (
                            <div className="mt-4">
                                <img src={formData.imageUrl} alt="Uploaded" className="w-32 h-32 object-cover rounded" />
                                <p className="mt-2 text-sm text-gray-600">{formData.imageUrl}</p>
                            </div>
                        )}
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
                            required
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
                            required
                            pattern="^([01]\d|2[0-3]):([0-5]\d)$"
                            placeholder="Expected HH:MM."
                            value={formData.open_at}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.open_at && (
                            <p className="text-red-500 text-xs italic mt-2">{errors.open_at}</p>
                        )}
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
                            required
                            placeholder="Expected HH:MM."
                            pattern="^([01]\d|2[0-3]):([0-5]\d)$"
                            value={formData.close_at}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.close_at && (
                            <p className="text-red-500 text-xs italic mt-2">{errors.close_at}</p>
                        )}
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
                            required
                            value={formData.address}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    {/* Longitude */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="longitude">
                            Longitude
                        </label>
                        <input
                            type="number"
                            id="longitude"
                            name="longitude"
                            value={formData.longitude}
                            onChange={handleChange}
                            required
                            step="0.000001"
                            min="-180"
                            max="180"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.longitude && (
                            <p className="text-red-500 text-xs italic mt-2">{errors.longitude}</p>
                        )}
                    </div>

                    {/* Latitude */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="latitude">
                            Latitude
                        </label>
                        <input
                            type="number"
                            id="latitude"
                            name="latitude"
                            value={formData.latitude}
                            onChange={handleChange}
                            required
                            step="0.000001"
                            min="-90"
                            max="90"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.latitude && (
                            <p className="text-red-500 text-xs italic mt-2">{errors.latitude}</p>
                        )}
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