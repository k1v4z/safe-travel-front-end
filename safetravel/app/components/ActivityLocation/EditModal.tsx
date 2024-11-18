import React, { useState } from "react";
import { uploadImage } from "./UploadImage";

interface Location {
    id?: string;
    name: string;
    imageUrl: string;
    locationOnTypes: { type: { name: string } }[];
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
const EditModal: React.FC<ModalProps> = ({ item, setEditItem }) => {
    const [formData, setFormData] = useState<Location>({
        id: item?.id || "", // Nếu item null, dùng giá trị mặc định
        name: item?.name || "",
        imageUrl: item?.imageUrl || "",
        locationOnTypes: item?.locationOnTypes || [{ type: { name: "" } }], // Xử lý locationOnTypes
        open_at: item?.open_at || "",
        close_at: item?.close_at || "",
        address: item?.address || "",
        longitude: item?.longitude || 0,
        latitude: item?.latitude || 0,
    });

    const [uploadImg, setUploadImg] = useState(false);
    const oldLocationType = item?.locationOnTypes[0]?.type?.name || '';
    const locationType = item?.locationOnTypes[0]?.type?.name || '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            if (name === "locationType") {
                // Cập nhật locationType trong locationOnTypes
                return {
                    ...prev,
                    locationOnTypes: [{ type: { name: value } }],
                };
            } else {
                return {
                    ...prev,
                    [name]: value,
                };
            }
        });
    };

    const handleClose = () => {
        setEditItem && setEditItem(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const locationData = {
            ...formData,
            longitude: formData.longitude || 0,
            latitude: formData.latitude || 0,
            oldLocationType: oldLocationType,
            locationType: formData.locationOnTypes[0]?.type?.name,
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity-location/${formData.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(locationData),
            });
            console.log("Data:", locationData);
            const result = await response.json();
            if (response.ok) {
                console.log('Location updated successfully:', result);
                window.location.reload();
                setEditItem && setEditItem(null);
            } else {
                console.log('Error:', result);
            }
        } catch (error) {
            console.error("Error updating location:", error);
            alert("An error occurred. Please try again.");
        }
    };
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0) return;

        const imageFile = event.target.files[0];
        setUploadImg(true);

        try {
            const imageUrl = await uploadImage(imageFile, "edit-location-folder");
            setFormData((prev) => ({ ...prev, imageUrl }));
        } catch (error) {
            alert("An error occurred while uploading the image.");
        } finally {
            setUploadImg(false);
        }
    };

    const options = ["Accomodation", "Food", "Museum", "Visit"]
    return (
        <div className="fixed z-10 inset-0 overflow-auto bg-gray-900 bg-opacity-50 pt-16 hidden" style={{ display: 'block' }}>
            <div className="bg-white mx-auto p-4 border border-gray-300 rounded-lg w-[680px] max-h-[90vh] overflow-auto">
                {/* Close Button */}
                <span
                    className="text-gray-400 float-right text-2xl font-bold cursor-pointer hover:text-black focus:outline-none"
                    onClick={handleClose}
                >
                    &times;
                </span>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Edit Location</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Location Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

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
                                onClick={() => document.getElementById("imageFile")?.click()}
                                className="shadow appearance-none border rounded py-2 px-4 bg-[#326D7B] text-white font-bold hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                {uploadImg ? "Uploading..." : "Select Image"}
                            </button>
                            {formData.imageUrl && (<img src={formData.imageUrl} alt="Preview" className="ml-4 w-16 h-16 object-cover rounded" />)}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="locationType">Type</label>
                        <select
                            id="locationType"
                            name="locationType"
                            value={formData.locationOnTypes[0]?.type?.name || ""}
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

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="open_at">Open At</label>
                        <input
                            type="text"
                            id="open_at"
                            name="open_at"
                            value={formData.open_at}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="close_at">Close At</label>
                        <input
                            type="text"
                            id="close_at"
                            name="close_at"
                            value={formData.close_at}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
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
                            step="0.000001" // Cho phép nhập số thập phân
                            min="-180" // Giới hạn giá trị thấp nhất
                            max="180"  // Giới hạn giá trị cao nhất
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

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
                            step="0.000001" // Cho phép nhập số thập phân
                            min="-90" // Giới hạn giá trị thấp nhất
                            max="90"  // Giới hạn giá trị cao nhất
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
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

export default EditModal;