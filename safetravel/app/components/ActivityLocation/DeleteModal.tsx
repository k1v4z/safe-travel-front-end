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
        <div className="modal" style={{ display: 'block' }}>
            <div className="delete-modal-content">
                <h2 className="text-lg font-bold mb-4">Are you sure you want to delete this Location?</h2>
                <div className="flex justify-center mt-8">
                    <button
                        type="button"
                        className="bg-[#D2FBFD] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
                        style={{ borderRadius: '40px', width: '158px', height: '56px' }}
                        onClick={handleDelete}
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        className="bg-[#D2FBFD] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        style={{ borderRadius: '40px', width: '158px', height: '56px' }}
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
