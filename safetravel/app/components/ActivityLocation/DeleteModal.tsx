import React from "react";

interface ModalProps {
    item: Location | null;
    setAddLocation?: React.Dispatch<React.SetStateAction<boolean>>;
    setEditItem?: React.Dispatch<React.SetStateAction<Location | null>>;
    setDeleteItem?: React.Dispatch<React.SetStateAction<Location | null>>;
}
interface Location {
    id?: string;
    name: string;
    imageUrl: string;
    locationType: string;
    open_at: string;
    close_at: string;
    address: string;
}
const DeleteModal: React.FC<ModalProps> = ({ item, setDeleteItem }) => {
    const handleClose = () => {
        setDeleteItem && setDeleteItem(null);
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity-location/${item?.id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                console.log('Location deleted successfully');
                window.location.reload();
                setDeleteItem && setDeleteItem(null);
            } else {
                const result = await response.json();
                console.log('Error:', result);
            }
        } catch (error) {
            console.error("Error deleting location:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="fixed z-10 inset-0 overflow-auto bg-gray-900 bg-opacity-50 pt-16 hidden" style={{ display: 'block' }}>
            <div className="bg-white mx-auto p-8 border border-gray-300 rounded-lg text-center w-[541px]">
                {/* Close Button */}
                <span
                    className="text-gray-400 float-right text-2xl font-bold cursor-pointer hover:text-black focus:outline-none"
                    onClick={handleClose}
                >
                    &times;
                </span>

                <h2 className="text-lg font-bold mb-4">Are you sure you want to delete this Location?</h2>

                <div className="flex justify-center mt-8">
                    <button
                        type="button"
                        className="bg-[#D2FBFD] text-black font-bold py-2 px-4 rounded-[40px] w-[158px] h-[56px] focus:outline-none focus:shadow-outline mr-4"
                        onClick={handleDelete}
                    >
                        Yes
                    </button>

                    <button
                        type="button"
                        className="bg-[#D2FBFD] text-black font-bold py-2 px-4 rounded-[40px] w-[158px] h-[56px] focus:outline-none focus:shadow-outline"
                        onClick={handleClose}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
