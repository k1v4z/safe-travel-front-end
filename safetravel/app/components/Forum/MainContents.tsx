import React, { useState } from "react";
import Posts from "./Posts";
import AddYourPost from "./AddYourPost";

function MainContents() {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal
    const [newPost, setNewPost] = useState({
        title: "",
        content: "",
        user_id: "user_12345", // Default user_id
        image_urls: [ "https://example.com/images/ba-na-hills.jpg"],
        privacy: "Private",
    });

    const handleCreatePost = async () => {
        console.log("New Post Data:", newPost); // Log the data being sent
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
                method: "POST",
                credentials: "include", // Send cookies if needed
                body: JSON.stringify({
                    title: newPost.title || "", // Send empty string if title is undefined
                    content: newPost.content || "", // Ensure content is not undefined
                    user_id: newPost.user_id || "user_12345", // Default to 'user_12345' if user_id is undefined
                    image_urls: newPost.image_urls || [ "https://example.com/images/ba-na-hills.jpg"], // Send empty array if no images
                    privacy: newPost.privacy || "Private", // Ensure privacy is passed
                }),
                headers: {
                    "Content-Type": "application/json", // Ensure proper content-type is set
                }
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to create post");
            }
    
            const data = await response.json();
            console.log("Post created:", data);
            alert("Bài viết đã được đăng!");
            setIsModalOpen(false); // Close modal after successful post creation
            setNewPost({
                title: "",
                content: "",
                user_id: "user_12345", // Reset to default user_id
                image_urls: [],
                privacy: "Private",
            }); // Reset the form
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Không thể đăng bài. Vui lòng thử lại.");
        }
    };
    

    return (
        <main className="ml-5 mr-5 overflow-y-auto bg-[#D2FBFD] mx-auto">
            {/* Search Bar */}
            <div className="flex justify-between items-center mb-4">
                <button className="search-container cursor-pointer">
                    <img
                        src="pictures/logo-find.png"
                        alt="Search Icon"
                        className="absolute z-10 mt-1 ml-0.5"
                    />
                    <input
                        type="text"
                        placeholder="Search in User"
                        className="border-2 border-gray-300 px-4 py-2 rounded-lg search-input relative pl-10 bg-[#D2FBFD]"
                    />
                </button>
            </div>

            {/* Share Something Box */}
            <div className="mb-4">
                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-start">
                    <div
                        className="flex flex-row w-full border-b-2 border-b-slate-200"
                        onClick={() => setIsModalOpen(true)} // Open modal when clicked
                    >
                        <img
                            src="/pictures/ava.png"
                            alt="User profile picture"
                            className="rounded-full w-12 h-12 mr-3 mb-3"
                        />
                        <textarea
                            placeholder="Share something :D"
                            className="w-full h-full border-none text-base font-medium cursor-pointer"
                            readOnly
                        />
                    </div>
                    <div className="flex flex-row justify-between items-center w-full mt-2">
                        <div className="flex space-x-2 gap-2">
                            <button>
                                <img src="pictures/Webcam-Video.png" alt="" />
                            </button>
                            <button>
                                <img src="pictures/picture.png" alt="" />
                            </button>
                            <button>
                                <img src="pictures/Smiley-Happy.png" alt="" />
                            </button>
                        </div>
                        <button className="bg-[#326D7B] text-white px-6 py-2 rounded-full mt-2">
                            Post
                        </button>
                    </div>
                </div>
            </div>

            {/* Display Posts */}
            <Posts />
            <Posts />
            <Posts />
            <Posts />

            {/* Modal Create Post */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg p-6">
                        {/* Header */}
                        <div className="flex justify-center items-center border-b pb-2 mb-4 relative">
                            <h2 className="text-lg font-bold">Create Post</h2>
                            <button
                                onClick={() => setIsModalOpen(false)} // Close modal
                                className="text-gray-500 hover:text-gray-700 absolute right-2 px-3 py-1 bg-gray-200 rounded-full"
                            >
                                ✖
                            </button>
                        </div>

                        {/* User Info */}
                        <div className="flex items-center mb-4">
                            <img
                                src="/pictures/ava.png"
                                alt="User profile"
                                className="rounded-full w-12 h-12 mr-3"
                            />
                            <div>
                                <h3 className="font-bold">Ashley Tran</h3>
                                <select
                                    className="text-sm border border-gray-300 rounded-lg px-2 py-1 mt-1"
                                    value={newPost.privacy}
                                    onChange={(e) =>
                                        setNewPost((prev) => ({
                                            ...prev,
                                            privacy: e.target.value,
                                        }))
                                    }
                                >
                                    <option value="Public">Public</option>
                                    <option value="Friends">Friends</option>
                                    <option value="Private">Private</option>
                                </select>
                            </div>
                        </div>

                        {/* Input Title */}
                        <input
                            type="text"
                            placeholder="Post Title"
                            className="w-full rounded-lg p-2 mb-4"
                            value={newPost.title}
                            onChange={(e) =>
                                setNewPost((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                }))
                            }
                        />

                        {/* Input Content */}
                        <textarea
                            placeholder="How was your trip, Ashley Tran?"
                            className="w-full h-20 rounded-lg p-2 mb-4"
                            value={newPost.content}
                            onChange={(e) =>
                                setNewPost((prev) => ({
                                    ...prev,
                                    content: e.target.value,
                                }))
                            }
                        ></textarea>

                        {/* Add to Post */}
                        <AddYourPost />

                        {/* Post Button */}
                        <button
                            className="bg-[#326D7B] text-white px-6 py-2 rounded-full w-full"
                            onClick={handleCreatePost} // Create post action
                        >
                            Post
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}

export default MainContents;
